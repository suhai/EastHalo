Rails.application.routes.draw do

	
  namespace :api do
    get 'courses/index'
  end

  namespace :api do
    get 'courses/new'
  end

  namespace :api do
    get 'courses/create'
  end

  namespace :api do
    get 'courses/show'
  end

  namespace :api do
    get 'courses/edit'
  end

  namespace :api do
    get 'courses/update'
  end

  namespace :api do
    get 'courses/destroy'
  end

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:create, :destroy]
		resources :users, except: [:new, :edit]
		resources :students, controller: 'users', type: 'Student' 
		resources :professors, controller: 'users', type: 'Professor'
			
    resources :posts
  end

  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
