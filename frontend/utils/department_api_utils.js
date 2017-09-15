export const createDepartment = department => (
	$.ajax({
		method: 'POST',
		url: '/api/departments',
		dataType: "json",
		data: department
	})
);

export const fetchDepartment = id => (
	$.ajax({
		method: 'GET',
		url: `api/departments/${id}`
	})
);

export const fetchDepartments = query => {
	return $.ajax({
		method: 'GET',
		url: `api/departments`,
	});
};

export const updateDepartment = (department, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/departments/${id}`,
		dataType: "json",
		data: department
	})
);

export const deleteDepartment = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/departments/${id}`
	})
);