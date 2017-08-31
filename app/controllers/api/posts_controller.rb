class Api::PostsController < ApplicationController
	def index
    if params[:search]
      @posts = Post.search(params[:search]).order('title ASC')
    else
			@posts = Post.all
			render :index
    end
	end

end
