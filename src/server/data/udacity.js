const axios = require('axios');
const Course = require('../models/Course');

// Import courses
const courses = async () => {
	try {
		const response = await axios.get('https://www.udacity.com/public-api/v1/courses');
		const courses = response.data.courses

		courses.forEach(async (course) => {
			if (course.available && course.public_listing) {
				const udacityCourse = new Course({
					affiliates: course.affiliates,
					duration: course.expected_duration + ' ' + course.expected_duration_unit,
					learning: removeTags(course.expected_learning),
					faq: course.faq,
					instructors: course.instructors,
					key: course.key,
					image: course.image,
					level: course.level,
					isFreeCourse: course.metadata.is_free_course,
					skills: course.metadata.skills,
					lessons: course.program_syllabus.lessons,
					projects: course.projects,
					prerequisite: removeTags(course.required_knowledge),
					shortSummary: course.short_summary,
					link: 'https://www.udacity.com/course/' + course.slug,
					starter: course.starter,
					subtitle: course.subtitle,
					summary: removeTags(course.summary),
					syllabus: course.syllabus,
					tags: course.tags,
					preview: course.teaser_video.youtube_url,
					title: course.title,
					tracks: course.tracks,
					platform: 'Udacity'
				});

				await udacityCourse.save();
			}
		});
		console.log('Added all Udacity courses');
	} catch (error) {
		console.log(error.toJSON());
	}
}

// Helper functions
const removeTags = str => str.replace(/(<([^>]+)>)/ig, '');

module.exports.udacityCourses = courses;