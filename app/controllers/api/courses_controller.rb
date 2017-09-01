class Api::CoursesController < ApplicationController
	before_action :set_course, only: [:show, :edit, :update, :destroy]

	def index
		@courses = Course.all 
		render :index
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
  end

	def destroy
		@course.destroy
	end
	

	private
	def course_params
		params.require(:course).permit(:title, :user_id, :course_credit, :start_time, :end_time)
	end

	def set_course
		@course = Course.find(params[:id])
	end
end
