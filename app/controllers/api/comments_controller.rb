class Api::CommentsController < ApplicationController
	before_action :set_comment, only: [:show, :edit, :update, :destroy]

	def index
		# if params[:search]
		# 	@comments = Comment.search(params[:search]).order('title ASC')
		# else
		# 	@comments = Comment.all
		# 	render :index
		# end
		@comments = Comment.all
		render :index
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
		render :show
	end

	def update	
		if @comment.update(comment_params)
			render :show
		else
			render json: @comment.errors.full_messages, status: 422
		end
	end

	def destroy
		@comment.destroy
	end


	#----------------------------------------------------------------------------
	private
	def comment_params
		params.require(:comment).permit(:body, :user_id, :post_id)
	end

	def set_comment
		@comment = Comment.find(params[:id])
	end
end
	