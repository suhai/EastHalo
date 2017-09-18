class Api::GradesController < ApplicationController
  before_action :set_grade, only: [:show, :update, :destroy]
	
	def index
		@grades = Grade.all 
		render :index
	end

	def create
		@grade = Grade.new(grade_params)
		if @grade.save
			render json: @grade
		else
			render json: @grade.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update	
		if @grade.update(grade_params)
			render :show
		else
			render json: @grade.errors.full_messages, status: 422
		end
	end

	def destroy
		@grade.destroy
		render json: @grade
	end
	

	#----------------------------------------------------------------------------
	private
	def grade_params
		params.require(:grade).permit(:course_id, :student_id, :grade_letter_id, :comment)
	end

	def set_grade
		@grade = Grade.find(params[:id])
	end
end
