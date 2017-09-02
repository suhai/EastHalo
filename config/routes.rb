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
		resources :friendships, except: [:new, :edit]
		resources :course_enrollments, only: [:index, :create, :show, :destroy]

		resources :transcripts, except: [:new, :edit]
		resources :meals, except: [:new, :edit]
		resources :cafetaria, except: [:new, :edit]
		resources :books, except: [:new, :edit]
		resources :bookstore, except: [:new, :edit]
		resources :schedules, except: [:new, :edit]
		resources :cafetaria, except: [:new, :edit]
  end

  root 'static_pages#root'
end
