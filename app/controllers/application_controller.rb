class ApplicationController < ActionController::Base
	# don't forget to set authentication for routes that require it
  protect_from_forgery with: :exception
	helper_method :current_user, :logged_in?, 

	def current_user
		return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
	end

	def login!(user)
		user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
	end

	def logged_in?
		!!current_user
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
