const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
	affiliates: [{
		_id: false,
		image: String,
		name: String
	}],
	duration: String,
	learning: String,
	key: String,
	image: String,
	level: String,
	isFreeCourse: Boolean,
	lessons: [{
		_id: false,
		points: [String],
		title: String
	}],
	// projects: [{
	// 	_id: false,
	// 	description: String,
	// 	name: String
	// }],
	prerequisite: String,
	shortSummary: String,
	url: String,
	subtitle: String,
	summary: String,
	tags: [String],
	title: {
		type: String,
		required: true
	},
	platform: {
		type: String,
		required: true
	},
	degree: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Course', CourseSchema);