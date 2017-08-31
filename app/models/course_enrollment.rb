class CourseEnrollment < ApplicationRecord
  belongs_to :course
	belongs_to :student, class_name: "User", :foreign_key => "user_id"
	

	# after_create :create_reciprocal
	# after_destroy :remove_reciprocal
	
	# def professor
	# 	@professor = Professor.find((Course.find(self.course_id)).professor_id)
	# end

	# def student
	# 	@student = Student.find_by(student_id: self.user_id)
	# end


	# def create_reciprocal
	# 	prof_students = self.professor.students
	# 	student_profs = self.student.professors
	# 	prof_students << @student unless prof_students.include?(@student)
	# 	student_profs << @professor unless student_profs.include?(@professor)
	# end

	# def remove_reciprocal
	# 	prof_students = self.professor.students
	# 	student_profs = self.student.professors
	# 	prof_students.delete(@student) if exists?
	# 	student_profs.delete(@professor) if exists?
	# end
end
