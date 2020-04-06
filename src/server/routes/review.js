const router = require('express').Router();
const Review = require('../models/Review')
const {
	reviewValidation
} = require('../validation');

router.get('/', async (req, res) => {
	const courseId = req.query.courseId
	const perPage = parseInt(req.query.perPage) || 5;
	const page = parseInt(req.query.page) || 1;

	const reviews = await Review.find({course: courseId})
		.skip((perPage * page) - perPage)
		.limit(perPage)
		.sort({date: -1});
	const numOfReviews = await Review.countDocuments();

	const allReviews = await Review.find({course: courseId}).select('rating -_id');

	return res.send({
		reviews: reviews,
		limit: perPage,
		page: page,
		pages: Math.ceil(numOfReviews / perPage),
		total: numOfReviews,
		avg_rating: ratingAvg(allReviews)
	})
});

router.post('/', async (req, res) => {
	const {
		error
	} = reviewValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const review = new Review({
		comment: req.body.comment,
		rating: req.body.rating,
		course: req.body.course,
		rated_by: req.body.rated_by
	});

	try {
		await review.save();
		res.send({'review': review});
	} catch (err) {
		res.status(400).send(err);
	}
});

// Helper function
const ratingAvg = arr => {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i].rating;
	}
	return sum / arr.length;
}

module.exports = router;