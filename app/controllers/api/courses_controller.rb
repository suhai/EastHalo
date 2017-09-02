class Api::CoursesController < ApplicationController
	before_action :set_course, only: [:show, :edit, :update, :destroy]

	def index
		@courses = Course.all 
		render :index
	end

	def create
		@course = Course.find_or_create_by(title: course_params[:title], professor_id: course_params[:professor_id], course_credit: course_params[:course_credit], start_time: course_params[:start_time], end_time: course_params[:end_time])
		if @course
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
	end
	

	#----------------------------------------------------------------------------
	private
	def course_params
		params.require(:course).permit(:title, :professor_id, :course_credit, :start_time, :end_time)
	end

	def set_course
		@course = Course.find(params[:id])
	end
end
