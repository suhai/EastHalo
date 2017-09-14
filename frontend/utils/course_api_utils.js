export const createCourse = course => (
	$.ajax({
		method: 'POST',
		url: '/api/courses',
		dataType: "json",
		data: course
	})
);

export const fetchCourse = id => (
	$.ajax({
		method: 'GET',
		url: `api/courses/${id}`
	})
);

export const fetchCourses = query => {
	return $.ajax({
		method: 'GET',
		url: `api/courses`,
	});
};

export const updateCourse = (course, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/courses/${id}`,
		dataType: "json",
		data: course
	})
);

export const deleteCourse = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/courses/${id}`
	})
);