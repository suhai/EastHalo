class Api::DepartmentsController < ApplicationController
	before_action :set_department, only: [:show, :update, :destroy]
	
	def index
		@departments = Department.all 
		render :index
	end

	def create
		@department = Department.new(department_params)
		if @department.save
			render json: @department
		else
			render json: @department.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update	
		if @department.update(department_params)
			render :show
		else
			render json: @department.errors.full_messages, status: 422
		end
	end

	def destroy
		@department.destroy
	end
	

	#----------------------------------------------------------------------------
	private
	def department_params
		params.require(:department).permit(:name)
	end

	def set_department
		@department = Department.find(params[:id])
	end
end
