# README

SAMPLE BACKEND OUTPUT FROM API CALLS

POST REQUESTS
$.ajax({
	method: 'POST',
	url: 'api/transcripts',
	data: {
		transcript: {
		student_id: 7
		}
	},
})
The above will create a new stranscript for student with id 7


$.ajax({
	method: 'POST',
	url: 'api/users',
	data: {
		user: {
		fname: 'Rich'
		}
	},
})
The above will create a new user with fname 'Rich'


$.ajax({
	method: 'POST',
	url: 'api/friendships',
	data: {
		friendship: {
		user_id: 3,
		friend_id: 4
		}
	},
})
The above will create a friendship between users with ids 3 and 4. This is a mutual action


$.ajax({
	method: 'POST',
	url: 'api/course_enrollments',
	data: {
		course_enrollment: {
		course_id: 1,
		student_id: 3
		}
	},
})
The above will enroll the student with id 3 into the course with id 1
#------------------------------------------------------------------------------


GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/users'
})
The above will retrieve all users from the database

GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/students'
})
The above will retrieve all users who are of type 'Student' from the database

GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/professors'
})
The above will retrieve all users who are of type 'Professor' from the database

GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/users/3'
})
The above will retrieve the user with user_id 3 from the database

GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/students/5'
})
The above will retrieve the student with student_id 5 from the database

GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/professors/7'
})
The above will retrieve the professor with professor_id 5 from the database
#------------------------------------------------------------------------------


PATCH REQUESTS
$.ajax({
	method: 'PATCH',
	url: 'api/users/7',
	data: {
		user: {
		fname: "Karla",
		}
	},
})
The above will update the fname of user with id 7 to 'Karla' 
#------------------------------------------------------------------------------



PUT REQUESTS
similar to PATCH but you'd have to pass in all the data for the particular instance even if some of the parameters don't need to be updated.
#------------------------------------------------------------------------------



DELETE REQUESTS
$.ajax({
  method: 'DELETE',
  url: 'api/users/8'
})
The above will delete user with user_id 8 from the database
#------------------------------------------------------------------------------