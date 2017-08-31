class Api::PostsController < ApplicationController
	def index
    if params[:search]
      @posts = Post.search(params[:search]).order('title ASC')
    else
			@posts = Post.all
			render :index
    end
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
		@post = Post.find_by(id: params[:id])
		@comments = @post.comments
    render :show
	end

	def update
		@post = Post.find_by(id: params[:id])
		
		if @post.update_attributes(post_params)
			render :show
		else
			render json: @post.errors.full_messages, status: 422
		end
	end

	def destroy
		@post.destroy
	end


	private
  def post_params
    params.require(:post).permit(:body, :user_id, :post_id)
  end

end
