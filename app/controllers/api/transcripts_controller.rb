class Api::TranscriptsController < ApplicationController
  before_action :set_transcript, only: [:show, :update, :destroy]
	before_action :require_is_admin, only: [:destroy]
	
	def index
		@transcripts = Transcript.all
		render :index
	end

	def show
		render :show
	end

	def create
		@transcript = Transcript.new(transcript_params)	
		if !Transcript.find_by_student_id(transcript_params[:student_id]) && @transcript.save
			render json: @transcript
		else
			render json: @transcript.errors.full_messages, status: 422
		end
	end

	def update
		if @transcript.update(transcript_params)
			render :show
		else
			render json: @transcript.errors.full_messages, status: 422
		end
	end

	def destroy
		@transcript.destroy
		render json: @transcript
	end
	
	
	#----------------------------------------------------------------------------
	private
	def transcript_params
		params.require(:transcript).permit(:student_id)
	end

	def set_transcript
		@transcript = Transcript.find(params[:id])
	end
	
	def require_is_admin
		!!self.is_admin
	end
end
