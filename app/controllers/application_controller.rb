class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
	helper_method :current_user, :logged_in?, 

	def current_user
		@current_user ||= User.find_by(session_token: session[:session_token])
	end

	def logged_in?
		!!current_user
	end

	def login!(user)
		@current_user = user
		session[:session_token] = user.reset_session_token!
	end

	def logout!
		current_user.reset_session_token!
		session[:session_token] = nil
		@current_user = nil
	end

	private
	def cloudinary_auth
		{
			cloud_name: 'swy',
			api_key: '689458482859676',
			api_secret: 'IITAL42byD9-ve1660rfF0iyx5M',
			enhance_image_tag: true,
			static_image_support: true
		}
	end
end
