class Api::UsersController < ApplicationController
	# before_action :is_verified_admin, only: [:index]
	before_action :set_user, only: [:show, :edit, :update, :destroy]
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
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
		@user = User.find_by(username: params[:id])
		@post = @user.posts
    render :show
  end
	
	def destroy
		@user.destroy
	end


  private
  def user_params
    params.require(:user).permit(:fname, :lname, :dob, :username, :email, :password, :profile_image_url, :bio)
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
		@user = type_class.find(params[:id])
	end
end
