const router = require('express').Router();
const Course = require('../models/Course')

router.get('/', async (req, res) => {
	const courses = await Course.find();

	return res.send(courses)
});

module.exports = router;