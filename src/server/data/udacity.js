const axios = require('axios');
const Course = require('../models/Course');

// Import courses
const courses = async () => {
	try {
		const response = await axios.get('https://www.udacity.com/public-api/v1/courses');
		const courses = response.data.courses;

		courses.forEach(async (course) => {
			if (course.available && course.public_listing) {
				const udacityCourse = new Course({
					affiliates: course.affiliates,
					duration: course.expected_duration + ' ' + course.expected_duration_unit,
					learning: removeHtmlTags(course.expected_learning),
					key: course.key,
					image: course.image,
					level: course.level,
					isFreeCourse: course.metadata.is_free_course,
					lessons: course.program_syllabus.lessons,
					// projects: course.projects,
					prerequisite: course.required_knowledge,
					shortSummary: course.short_summary,
					url: 'https://www.udacity.com/course/' + course.slug,
					subtitle: course.subtitle,
					summary: removeHtmlTags(course.summary),
					tags: combineTags(course.tags, course.tracks, course.skills),
					title: course.title,
					platform: 'udacity'
				});

				await udacityCourse.save();
			}
		});
		console.log('Added all Udacity courses');
	} catch (error) {
		console.log(error);
	}
}

// Import Nanodegrees
const degrees = async () => {
	try {
		const response = await axios.get('https://catalog-api.udacity.com/v1/degrees');
		const degrees = response.data.degrees.slice(0,1);
		
		degrees.forEach(async (course) => {
			if (course.available) {
				const udacityDegree = new Course({
					affiliates: course.affiliates,
					// duration: course.expected_duration + ' ' + course.expected_duration_unit,
					learning: removeHtmlTags(course.expected_learning),
					key: course.key,
					image: course.image,
					level: course.level,
					isFreeCourse: course.metadata.is_free_course,
					// lessons: course.program_syllabus.lessons,
					// projects: course.projects,
					prerequisite: course.required_knowledge,
					shortSummary: course.short_summary,
					url: 'https://www.udacity.com/course/' + course.slug,
					subtitle: course.subtitle,
					summary: removeHtmlTags(course.summary),
					// syllabus: course.syllabus,
					tags: combineTags(course.tags, course.tracks, course.skills),
					title: course.title,
					platform: 'Udacity',
					degree: true
				});
				console.log(udacityDegree);
				// await udacityDegree.save();
			}
		});
		console.log('Added all Udacity degrees');
	} catch (error) {
		console.log(error.toJSON());
	}
}

// Helper functions
const removeHtmlTags = str => str.replace(/(<([^>]+)>)/ig, '');

function combineTags(tags, tracks, skills) {
	if (tracks) tags.concat(tracks);
	if (skills) tags.concat(skills);
	tags.filter(item => item !== 'All')
	return tags;
}

module.exports = {
	udacityCourses: courses,
	udacityDegree: degrees
};