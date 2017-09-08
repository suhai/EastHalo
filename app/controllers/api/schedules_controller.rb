class Api::SchedulesController < ApplicationController
	before_action :set_schedule, only: [:show, :update, :destroy]

	def index
		@schedules = Schedule.all
		render :index
	end

	def show
		render :show
	end

	def create
		@schedule = Schedule.find_or_create_by(user_id: schedule_params[:user_id])
		if @schedule 
			render json: @schedule
		else
			render json: @schedule.errors.full_messages, status: 422
		end
	end

	def update
		if @schedule.update(schedule_params)
			render :show
		else
			render json: @schedule.errors.full_messages, status: 422
		end
	end

	def destroy
		@schedule.destroy
	end
	

	#----------------------------------------------------------------------------
	private
  def schedule_params
    params.require(:schedule).permit(:user_id)
  end

	def set_schedule
		@schedule = Schedule.find(params[:id])
	end
end
