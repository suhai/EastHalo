class Api::UsersController < ApplicationController
  # before_action :is_verified_admin, only: [:index]

  def index
    if params[:search] != nil
      @users = User
        .select('*')
        .where("UPPER(users.username) LIKE UPPER(?)", "%#{params[:search]}%")

      render :index
    else
      @users = User.all
      render json: @users
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
    render :show
  end
	
	def destroy
	end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :dob, :username, :email, :password, :profile_image_url, :bio)
  end
end
