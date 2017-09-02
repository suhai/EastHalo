class Api::UsersController < ApplicationController
	# before_action :is_verified_admin, only: [:index]
	before_action :set_user, only: [:show, :edit, :update, :destroy]
	before_action :require_admin_privilege, only: [:destroy]
  before_action :set_type

  def index
    if params[:search] != nil
      @users = User
        .select('*')
        .where("UPPER(users.username) LIKE UPPER(?)", "%#{params[:search]}%")

      render :index
		else
			@users = type_class.all
			render :index
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      # login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
		@user = User.find(params[:id])
		
		if current_user.is_admin
			render :show if @user.update(user_params2)
		elsif @user.update(user_params)
      render :show
    else
			render json: @user.errors.full_messages, status: 422
		end
  end

  def show
		@post = @user.posts
    render :show
  end
	
	def destroy
		@user.destroy
	end


	#----------------------------------------------------------------------------
  private
  def user_params
    params.require(:user).permit(:fname, :lname, :dob, :username, :email, :password, :profile_image_url, :bio)
  end
	
	def user_params2
    params.require(:user).permit(:fname, :lname, :dob, :username, :email, :password, :profile_image_url, :bio, :cash_balance, :course_credit)
	end
	
	def set_type
		@type = type
	end

	def type
		["Student", "Professor"].include?(params[:type]) ? params[:type] : "User"
	end

	def type_class
		type.constantize
	end

	def set_user
		@user = User.find(params[:id])
		# @user = type_class.find(params[:id])
	end

	def require_admin_privilege
		@user.is_admin
	end
end
