Rails.application.routes.draw do

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:create, :destroy]
		resources :users, except: [:new, :edit]
		resources :students, controller: 'users', type: 'Student', except: [:new, :edit]
		resources :professors, controller: 'users', type: 'Professor', except: [:new, :edit]
			
		resources :posts, except: [:new, :edit] do 
			resources :comments, only: [:create, :show, :update]
		end
		resources :comments, only: [:index, :destroy]
		resources :courses, except: [:new, :edit]
		resources :frienships, only: [:index, :show, :destroy]
		resources :course_enrollments, only: [:index, :show]

		resources :transcrips, except: [:new, :edit]
		resources :meals, except: [:new, :edit]
		resources :cafetaria, except: [:new, :edit]
		resources :books, except: [:new, :edit]
		resources :bookstore, except: [:new, :edit]
  end

  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
