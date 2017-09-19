class Api::MessagesController < ApplicationController
  before_action :set_message, only: [:show, :destroy]
	
	def index
		@messages = Message.all
		render :index
	end

	def show
		render :show
	end

	def create
		@message = Message.new(message_params)	
		if @message.save
			render json: @message
		else
			render json: @message.errors.full_messages, status: 422
		end
	end

	def destroy
		@message.destroy
		render json: @message
	end
	
	
	#----------------------------------------------------------------------------
	private
	def message_params
		params.require(:message).permit(:sender, :email, :subject, :msg)
	end

	def set_message
		@message = Message.find(params[:id])
	end
end
