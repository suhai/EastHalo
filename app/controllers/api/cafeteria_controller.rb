class Api::CafeteriaController < ApplicationController
  before_action :set_cafetarium, only: [:show, :update, :destroy]
	before_action :require_is_admin, only: [:create, :destroy]
	
	def index
		@cafeteria = Cafetarium.all 
		render :index
	end

	def create
		@cafetarium = Cafetarium.new(cafetarium_params)
		if @cafetarium.save
			render json: @cafetarium
		else
			render json: @cafetarium.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update	
		if @cafetarium.update(cafetarium_params)
			render :show
		else
			render json: @cafetarium.errors.full_messages, status: 422
		end
	end

	def destroy
		@cafetarium.destroy
		render json: @cafeteria
	end
	

	#----------------------------------------------------------------------------
	private
	def cafetarium_params
		params.require(:cafetarium).permit(:account)
	end

	def set_cafetarium
		@cafetarium = Cafetarium.find(params[:id])
	end
	
	def require_is_admin
		!!self.is_admin
	end
end
