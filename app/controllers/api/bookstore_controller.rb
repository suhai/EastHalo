class Api::BookstoreController < ApplicationController
	before_action :set_bookstore, only: [:show, :update, :destroy]

  def index
		@bookstores = Bookstore.all 
		render :index
  end

	def create
		@bookstore = Bookstore.new(bookstore_params)
		if @bookstore.save
			render json: @bookstore
		else
			render json: @bookstore.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update	
		if @bookstore.update(bookstore_params)
			render :show
		else
			render json: @bookstore.errors.full_messages, status: 422
		end
	end

	def destroy
		@bookstore.destroy
		render json: @bookstore
	end
	

	#----------------------------------------------------------------------------
	private
	def bookstore_params
		params.require(:bookstore).permit(:account)
	end

	def set_bookstore
		@bookstore = Bookstore.find(params[:id])
	end
end
