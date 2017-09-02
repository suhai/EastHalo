class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
	
	def index
		@books = Book.all 
		render :index
	end

	def create
		@book = Book.new(book_params)
		if @book.save
			render json: @book
		else
			render json: @book.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def update	
		if @book.update(book_params)
			render :show
		else
			render json: @book.errors.full_messages, status: 422
		end
	end

	def destroy
		@book.destroy
	end
	

	#----------------------------------------------------------------------------
	private
	def book_params
		params.require(:book).permit(:bookstore_id, :title, :author, :publisher, :description, :price, :category)
	end

	def set_book
		@book = Book.find(params[:id])
	end
end
