class Api::CommentsController < ApplicationController
	
		def index
			if params[:search]
				@comments = Comment.search(params[:search]).order('title ASC')
			else
				@comments = Comment.all
				render :index
			end
		end
	
		def create
			@comment = Comment.new(comment_params)	
			if @comment.save
				render json: @comment
			else
				render json: @comment.errors.full_messages, status: 422
			end
		end
	
		def show
			@comment = Comment.find_by(id: params[:id])
			render :show
		end
	
		def update
			@comment = Comment.find_by(id: params[:id])
			
			if @comment.update_attributes(comment_params)
				render :show
			else
				render json: @comment.errors.full_messages, status: 422
			end
		end
	
		def destroy
			@comment.destroy
		end
	
	
		private
		def comment_params
			params.require(:comment).permit(:body, :user_id, :post_id)
		end
	end
	