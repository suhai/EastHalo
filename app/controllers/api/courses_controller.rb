class Api::CoursesController < ApplicationController
	before_action :set_course, only: [:show, :update, :destroy]

	def index
		if current_user.is_admin
			@course_enrollments = Course.all
			render :index
		else
			@course_enrollments = Course.where(student_id: current_user.id) || Course.where(professor_id: current_user.id)
			render :index
		end	
	end

	def create
		@course = Course.new(course_params)
		if @course.save
			render json: @course
		else
			render json: @course.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update
		if @course.update(course_params)
			render :show
		else
			render json: @course.errors.full_messages, status: 422
		end
	end

	def destroy
		@course.destroy
		render json: @course
	end
	

	#----------------------------------------------------------------------------
	private
	def course_params
		params.require(:course).permit(:course_code, :title, :course_cap, :course_description, :department_id, :professor_id, :course_credit, :start_time, :end_time)
	end

	def set_course
		@course = Course.find(params[:id])
	end
end
