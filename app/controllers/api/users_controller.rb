class Api::UsersController < ApplicationController
	before_action :set_user, only: [:show, :update, :destroy]
  before_action :set_type

  def index
    if params[:search] != nil
      @users = User
        .select('*')
        .where("UPPER(users.username) LIKE UPPER(?)", "%#{params[:search]}%")
			render :index
		else
			@users = type.constantize.all
			render :index
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update
		@user = User.find(params[:id])
	
		if @user.update_attributes(user_params)
			login!(@user)
      render json: @user
		else
			render json: @user.errors.full_messages, status: 422
		end
  end

  def show
		@user = User.find(params[:id])
    render :show
  end
	
	def destroy
		@user = User.find(params[:id])
		@user.destroy if @user.present?
		# current_user.is_admin ?	@user.destroy : "Sorry You Lack This Privilege"
		render json: @user
	end


	#----------------------------------------------------------------------------
  private
	def user_params
    params.require(:user).permit(:username, :password, :email, :fname, :lname, :dob, :gender, :profile_image_url, :bio, :cash_balance, :course_credit, :is_admin, :type)
	end
	
	def set_type
		@type = type
	end

	def type
		["Student", "Professor"].include?(params[:type]) ? params[:type] : "User"
	end

	def set_user
		@user = type.constantize.find(params[:id])
	end
end
