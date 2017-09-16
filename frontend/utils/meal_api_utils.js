export const createMeal = meal => (
	$.ajax({
		method: 'POST',
		url: '/api/meals',
		dataType: "json",
		data: meal
	})
);

export const fetchMeal = id => (
	$.ajax({
		method: 'GET',
		url: `api/meals/${id}`
	})
);

export const fetchMeals = query => {
	return $.ajax({
		method: 'GET',
		url: `api/meals`,
	});
};

export const updateMeal = (meal, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/meals/${id}`,
		dataType: "json",
		data: meal
	})
);

export const deleteMeal = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/meals/${id}`
	})
);