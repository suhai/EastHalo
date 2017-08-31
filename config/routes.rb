Rails.application.routes.draw do

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:create, :destroy]
		resources :users, except: [:new, :edit]
		resources :students, controller: 'users', type: 'Student' 
		resources :professors, controller: 'users', type: 'Professor'
			
		resources :posts
		resources :comments
		resources :courses
		resources :frienships
		resources :course_enrollments
  end

  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
