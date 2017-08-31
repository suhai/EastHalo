class Professor < User

	def students
		studs = []
		self.courses.each do |course|
			course.students.each do |student|
				studs << student
			end
		end
		
		studs.uniq
	end
end
