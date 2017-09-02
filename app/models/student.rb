class Student < User
	has_many :course_enrollments
  has_many :courses, through: :course_enrollments, dependent: :destroy
	has_one :transcript

	def professors
		profs = []
		self.courses.each do |course|
			profs << course.professor
		end	
		profs.uniq
	end

	def enroll_in(course)
		courses = self.courses
		students = course.students
		courses << course unless courses.include?(course)
		students << self unless students.include?(self)
	end

	def disenroll_from(course)
		self.courses.delete(course)
		course.students.delete(self)
	end
	
end
