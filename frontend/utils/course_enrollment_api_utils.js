export const createCourseEnrollment = course_enrollment => (
	$.ajax({
		method: 'POST',
		url: '/api/course_enrollments',
		dataType: "json",
		data: course_enrollment
	})
);

export const fetchCourseEnrollment = id => (
	$.ajax({
		method: 'GET',
		url: `api/course_enrollments/${id}`
	})
);

export const fetchCourseEnrollments = query => {
	return $.ajax({
		method: 'GET',
		url: `api/course_enrollments`,
	});
};


export const deleteCourseEnrollment = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/course_enrollments/${id}`
	})
);