class Api::FriendshipsController < ApplicationController
	before_action :set_friendship, only: [:show, :destroy]

	def index
		if current_user.is_admin
			@friendships = Friendship.all
			render :index
		else
			@friendships = Friendship.where(user_id: current_user.id)
			render :index
		end
	end

	def create
		@friendship = Friendship.new(friendship_params)
		if @friendship.save
			render json: @friendship
		else
			render json: @friendship.errors.full_messages, status: 422
		end
	end

	def show
		render :show
	end

	def destroy
		@friendship.destroy
		render json: @friendship
	end
	

	#----------------------------------------------------------------------------
	private
	def friendship_params
		params.require(:friendship).permit(:user_id, :friend_id)
	end

	def set_friendship
		@friendship = Friendship.find(params[:id])
	end
end
