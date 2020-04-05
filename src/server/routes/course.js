const router = require('express').Router();
const Course = require('../models/Course')

router.get('/search', async (req, res) => {
	const query = req.query.query;
	const perPage = parseInt(req.query.perPage) || 10;
	const page = parseInt(req.query.page) || 1;

	const courses = await Course.find({
			$text: {
				$search: query
			}
		}, {
			score: {
				$meta: 'textScore'
			}
		}).sort({
			score: {
				$meta: 'textScore'
			}
		}).skip((perPage * page) - perPage)
		.limit(perPage);

	const numOfCourses = await Course.countDocuments();

	return res.send({
		courses: courses,
		limit: perPage,
		page: page,
		pages: Math.ceil(numOfCourses / perPage),
		total: numOfCourses
	})
});

router.get('/', async (req, res) => {
	const perPage = parseInt(req.query.perPage) || 10;
	const page = parseInt(req.query.page) || 1;

	const courses = await Course.find()
		.skip((perPage * page) - perPage)
		.limit(perPage);
	const numOfCourses = await Course.countDocuments();

	return res.send({
		courses: courses,
		limit: perPage,
		page: page,
		pages: Math.ceil(numOfCourses / perPage),
		total: numOfCourses
	})
});

router.get('/:id', async (req, res) => {
	const {
		id
	} = req.params;
	const course = await Course.find({
		_id: id
	});

	return res.send(course);
});



module.exports = router;