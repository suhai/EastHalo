class Api::PostsController < ApplicationController
	before_action :set_post, only: [:show, :edit, :update, :destroy]
	
	def index
    # if params[:search]
    #   @posts = Post.search(params[:search]).order('title ASC')
    # else
		# 	@posts = Post.all
		# 	render :index
		# end
		@posts = Post.all
		render :index
	end

	def create
		@post = Post.new(post_params)	
		if @post.save
			render json: @post
		else
			render json: @post.errors.full_messages, status: 422
		end
	end

	def show
		@comments = @post.comments
    render :show
	end

	def update	
		if @post.update(post_params)
			render :show
		else
			render json: @post.errors.full_messages, status: 422
		end
	end

	def destroy
		@post.destroy
	end


	#----------------------------------------------------------------------------
	private
  def post_params
    params.require(:post).permit(:body, :title, :user_id)
  end

	def set_post
		@post = Post.find(params[:id])
	end
end
