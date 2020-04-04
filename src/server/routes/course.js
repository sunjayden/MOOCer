const router = require('express').Router();
const Course = require('../models/Course')

router.get('/', async (req, res) => {
	const perPage = req.query.perPage || 10;
	const page = req.query.perPage || 1;
	
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
	const { id } = req.params;
	const course = await Course.find({
		_id: id
	});

	return res.send(course);
})

module.exports = router;