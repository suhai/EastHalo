export const createGrade = grade => (
	$.ajax({
		method: 'POST',
		url: '/api/grades',
		dataType: "json",
		data: grade
	})
);

export const fetchGrade = id => (
	$.ajax({
		method: 'GET',
		url: `api/grades/${id}`
	})
);

export const fetchGrades = query => {
	return $.ajax({
		method: 'GET',
		url: `api/grades`,
	});
};

export const updateGrade = (grade, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/grades/${id}`,
		dataType: "json",
		data: grade
	})
);

export const deleteGrade = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/grades/${id}`
	})
);