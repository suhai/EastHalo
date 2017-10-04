class Api::CourseEnrollmentsController < ApplicationController
	before_action :set_course_enrollment, only: [:show, :destroy]
	
	def index
		@course_enrollments = CourseEnrollment.where(student_id: current_user.id)
		render :index
	end

	def create
		@course_enrollment = CourseEnrollment.new(course_enrollment_params)
		if @course_enrollment.save
			render json: @course_enrollment
		else
			render json: @course_enrollment.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def destroy
		@course_enrollment.destroy
		render json: @course_enrollment
	end
	

	#----------------------------------------------------------------------------
	private
	def course_enrollment_params
		params.require(:course_enrollment).permit(:course_id, :student_id)
	end

	def set_course_enrollment
		@course_enrollment = CourseEnrollment.find(params[:id])
	end
end
