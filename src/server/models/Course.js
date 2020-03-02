const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
	affiliates: [{
		_id: false,
		image: String,
		name: String
	}],
	duration: String,
	learning: String,
	faq: String,
	instructors: [{
		_id: false,
		image: String,
		name: String,
		title: String
	}],
	key: String,
	image: String,
	level: String,
	isFreeCourse: Boolean,
	skills: [String],
	lessons: [{
		_id: false,
		points: [String],
		title: String
	}],
	projects: [{
		_id: false,
		description: String,
		name: String
	}],
	prerequisite: String,
	shortSummary: String,
	link: String,
	starter: Boolean,
	subtitle: String,
	summary: String,
	syllabus: String,
	tags: [String],
	preview: String,
	title: {
		type: String,
		required: true
	},
	tracks: [String],
	platform: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Course', CourseSchema);