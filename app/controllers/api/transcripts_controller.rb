class Api::TranscriptsController < ApplicationController
  before_action :set_transcript, only: [:show, :edit, :update, :destroy]
	
		def index
			if params[:search]
				@transcripts = Transcript.search(params[:search]).order('title ASC')
			else
				@transcripts = Transcript.all
				render :index
			end
		end
	
		def show
			render :show
		end
	
		def create
			@transcript = Transcript.new(transcript_params)	
			if @transcript.save
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
		end
		
		
		#----------------------------------------------------------------------------
		private
		def transcript_params
			params.require(:transcript).permit(:student_id)
		end
	
		def set_transcript
			@transcript = Transcript.find(params[:id])
		end
end
