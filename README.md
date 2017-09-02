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

$.ajax({
	method: 'POST',
	url: 'api/books',
	data: {
		book: {
			price: 15,
		title: "Inrganic Chemistry", bookstore_id: 1}
	},
})
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

$.ajax({
	method: 'POST',
	url: 'api/bookstore',
	data: {
		book: {
			account: 20000
		}
	},
})

$.ajax({
	method: 'GET',
	url: 'api/books'
})
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




																	DATABASE MODELS
#------------------------------------------------------------------------------		

                   List of relations
 Schema |           Name            |   Type   | Owner
--------+---------------------------+----------+-------
 public | ar_internal_metadata      | table    | suhai
 public | books                     | table    | suhai
 public | books_id_seq              | sequence | suhai
 public | bookstores                | table    | suhai
 public | bookstores_id_seq         | sequence | suhai
 public | cafetaria                 | table    | suhai
 public | cafetaria_id_seq          | sequence | suhai
 public | comments                  | table    | suhai
 public | comments_id_seq           | sequence | suhai
 public | course_enrollments        | table    | suhai
 public | course_enrollments_id_seq | sequence | suhai
 public | courses                   | table    | suhai
 public | courses_id_seq            | sequence | suhai
 public | friendships               | table    | suhai
 public | friendships_id_seq        | sequence | suhai
 public | meals                     | table    | suhai
 public | meals_id_seq              | sequence | suhai
 public | posts                     | table    | suhai
 public | posts_id_seq              | sequence | suhai
 public | schedules                 | table    | suhai
 public | schedules_id_seq          | sequence | suhai
 public | schema_migrations         | table    | suhai
 public | transcripts               | table    | suhai
 public | transcripts_id_seq        | sequence | suhai
 public | users                     | table    | suhai
 public | users_id_seq              | sequence | suhai
(26 rows)


SAMPLE DATA FROM THE COURSES TABLE
#------------------------------------------------------------------------------	

 id |   title   | course_credit | start_time | end_time |          created_at           |          updated_at           | professor_id
----+-----------+---------------+------------+----------+-------------------------------+-------------------------------+--------------
  2 | Chemistry |               |            |          | 2017-09-01 16:48:27.228722-07 | 2017-09-01 16:48:27.228722-07 |            5
  1 | Art       |               |            |          | 2017-09-01 16:47:20.182605-07 | 2017-09-01 16:51:43.301649-07 |            4
  3 | English   |           1.0 |            |          | 2017-09-01 22:07:57.661362-07 | 2017-09-01 22:07:57.661362-07 |            5
(3 rows)