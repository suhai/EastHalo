class Api::GradeLettersController < ApplicationController
  before_action :set_grade_letter, only: [:show, :update, :destroy]
	
	def index
		@grade_letters = GradeLetter.all 
		render :index
	end

	def create
		@grade_letter = GradeLetter.new(grade_letter_params)
		if @grade_letter.save
			render json: @grade_letter
		else
			render json: @grade_letter.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update	
		if @grade_letter.update(grade_letter_params)
			render :show
		else
			render json: @grade_letter.errors.full_messages, status: 422
		end
	end

	def destroy
		@grade_letter.destroy
		render json: @grade_letter
	end
	

	#----------------------------------------------------------------------------
	private
	def grade_letter_params
		params.require(:grade_letter).permit(:letter, :weight)
	end

	def set_grade_letter
		@grade_letter = GradeLetter.find(params[:id])
	end
end
