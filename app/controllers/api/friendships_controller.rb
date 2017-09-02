class Api::FriendshipsController < ApplicationController
	before_action :set_friendship, only: [:show, :destroy]

	def index
		@friendships = Friendship.all
		render :index
	end

	def create
		@friendship = Friendship.new(frienship_params)
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
