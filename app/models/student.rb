class Student < User
	has_many :posts

	def professors
		profs = []
		self.courses.each do |course|
			profs << course.professor
		end
		
		profs.uniq
	end
end
