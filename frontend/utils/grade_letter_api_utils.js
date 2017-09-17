export const createGradeLetter = grade_letter => (
	$.ajax({
		method: 'POST',
		url: '/api/grade_letters',
		dataType: "json",
		data: grade_letter
	})
);

export const fetchGradeLetter = id => (
	$.ajax({
		method: 'GET',
		url: `api/grade_letters/${id}`
	})
);

export const fetchGradeLetters = query => {
	return $.ajax({
		method: 'GET',
		url: `api/grade_letters`,
	});
};

export const updateGradeLetter = (grade_letter, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/grade_letters/${id}`,
		dataType: "json",
		data: grade_letter
	})
);

export const deleteGradeLetter = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/grade_letters/${id}`
	})
);