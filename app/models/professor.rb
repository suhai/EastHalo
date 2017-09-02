class Professor < User
	has_many :courses

	def students
		result = []
		Course.where(professor_id: self.id).each do |course|
			result += course.students
		end

		result.uniq
	end

	def courses
		Course.where(professor_id: self.id)
	end
end
