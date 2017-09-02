class Api::MealsController < ApplicationController
  before_action :set_meal, only: [:show, :update, :destroy]
	
	def index
		if params[:search]
			@meals = Meal.search(params[:search]).order('title ASC')
		else
			@meals = Meal.all
			render :index
		end
	end

	def show
		render :show
	end

	def create
		@meal = Meal.new(meal_params)	
		if @meal.save
			render json: @meal
		else
			render json: @meal.errors.full_messages, status: 422
		end
	end

	def update
		if @meal.update(meal_params)
			render :show
		else
			render json: @meal.errors.full_messages, status: 422
		end
	end

	def destroy
		@meal.destroy
	end
	
	
	#----------------------------------------------------------------------------
	private
	def meal_params
		params.require(:meal).permit(:name, :ingredients, :price)
	end

	def set_meal
		@meal = Meal.find(params[:id])
	end
end
