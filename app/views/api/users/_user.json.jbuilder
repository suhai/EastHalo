json.id user.id
json.type user.type
json.fname user.fname
json.lname user.lname
json.dob user.dob
json.username user.username
json.email user.email
json.bio user.bio
json.phone_number user.phone_number
json.gender user.gender
json.profile_image_url user.profile_image_url
json.gpa user.gpa
json.course_enrollments user.course_enrollments if user.type == 'Student'
json.current_course_load user.current_course_load if user.type == 'Student'
json.completed_course_credit user.completed_course_credit if user.type == 'Student'
json.cash_balance user.cash_balance
json.is_admin user.is_admin
json.friends user.friends
json.posts user.posts
json.comments user.comments
json.friendships user.friendships
json.courses user.courses if user.type == 'Student' || user.type == 'Professor'
json.professors user.professors if user.type == 'Student'
json.students user.students if user.type == 'Professor'
json.created_at user.created_at
json.updated_at user.updated_at
