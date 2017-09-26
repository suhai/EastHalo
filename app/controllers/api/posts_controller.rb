class Api::PostsController < ApplicationController
	before_action :set_post, only: [:show, :update, :destroy]
	
	def index
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
		render json: @post
	end


	#----------------------------------------------------------------------------
	private
  def post_params
    params.require(:post).permit(:body, :title, :user_id, :image_url)
  end

	def set_post
		@post = Post.find(params[:id])
	end
end
