class Api::NewsController < ApplicationController
	before_action :set_news, only: [:show, :update, :destroy]
	
	def index
		@all_news = News.all
		render :index
	end

	def show
		render :show
	end

	def create
		@news = News.new(news_params)	
		if @news.save
			render json: @news
		else
			render json: @news.errors.full_messages, status: 422
		end
	end

	def update
		if @news.update(news_params)
			render :show
		else
			render json: @news.errors.full_messages, status: 422
		end
	end

	def destroy
		@news.destroy
		render json: @news
	end
	
	
	#----------------------------------------------------------------------------
	private
	def news_params
		params.require(:news).permit(:headline, :url, :date, :image_url)
	end

	def set_news
		@news = News.find(params[:id])
	end
end
