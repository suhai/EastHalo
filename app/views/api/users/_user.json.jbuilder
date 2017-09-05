json.extract! user, :id, :type, :fname, :lname, :dob, :username, :email, :bio, :profile_image_url, :friends, :posts, :comments, :schedule, :cash_balance, :is_admin, :created_at, :updated_at

if user.type == 'Student'
	json.extract! user, :courses, :professors, :course_credit, :course_enrollments, :transcript
elsif user.type == 'Professor'
	json.extract! user, :courses, :students, :course_credit
end

json.id user.id
json.type user.type
json.fname user.fname
json.lname user.lname
json.dob user.dob
json.username user.username
json.email user.email
json.bio user.bio
json.profile_image_url user.profile_image_url
json.friends user.friends
json.posts user.posts
json.comments user.comments
json.courses user.courses if user.type == 'Student' || user.type == 'Professor'
json.professors user.professors if user.type == 'Student'
json.course_enrollments user.course_enrollments if user.type == 'Student'
json.students user.students if user.type == 'Professor'
json.course_credit user.course_credit if user.type == 'Professor' || user.type == 'Student'
json.schedule user.schedule
json.transcript user.transcript if user.type == 'Student'
json.cash_balance user.cash_balance
json.is_admin user.is_admin
json.created_at user.created_at
json.updated_at user.updated_at
