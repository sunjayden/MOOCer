const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);