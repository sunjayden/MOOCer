const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {
	registerValidation,
	loginValidation
} = require('../validation');

// Register
router.post('/register', async (req, res) => {
	const {
		error
	} = registerValidation(req.body);
	if (error) return res.status(400).send({'success': false, 'error': error.details[0].message});

	const emailExist = await User.findOne({
		email: req.body.email.toLowerCase()
	});
	if (emailExist) return res.status(400).send({'success': false, 'error': 'Email already exists'});

	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email.toLowerCase(),
		password: hashPassword
	});

	try {
		await user.save();
		const token = jwt.sign({
			_id: user._id
		}, process.env.TOKEN_SECRET);
		res.header('Authorization', token).send({'success': true, 'token': token});
	} catch (err) {
		res.status(400).send({'success': false, 'error': err});
	}
});

// Login
router.post('/login', async (req, res) => {
	const {
		error
	} = loginValidation(req.body);
	if (error) return res.status(400).send({'success': false, 'error': error.details[0].message});

	const user = await User.findOne({
		email: req.body.email.toLowerCase()
	});
	if (!user) return res.status(400).send({'success': false, 'error': 'Email or password is incorret'});

	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send({'success': false, 'error': 'Email or password is incorret'});

	const token = jwt.sign({
		_id: user._id
	}, process.env.TOKEN_SECRET);
	res.header('Authorization', token).send({'success': true, 'token': token});
});

module.exports = router;