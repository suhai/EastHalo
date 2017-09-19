Rails.application.routes.draw do

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:create, :destroy]
		resources :users, except: [:new, :edit] do
			resources :comments, only: [:create, :show, :update, :destroy]
		end
		resources :students, controller: 'users', type: 'Student', except: [:new, :edit]
		resources :professors, controller: 'users', type: 'Professor', except: [:new, :edit]
			
		resources :posts, except: [:new, :edit] do 
			resources :comments, only: [:create, :show, :update, :destroy]
		end
		resources :comments, only: [:index, :create, :show, :destroy]
		resources :courses, except: [:new, :edit]
		resources :friendships, except: [:new, :edit]
		resources :course_enrollments, only: [:index, :create, :show, :destroy]
		resources :transcripts, except: [:new, :edit]
		resources :books, except: [:new, :edit]
		resources :bookstore, except: [:new, :edit]
		resources :schedules, except: [:new, :edit]
		resources :cafetaria, except: [:new, :edit]
		resources :meals, except: [:new, :edit]
		resources :grade_letters, except: [:new, :edit]
		resources :grades, except: [:new, :edit]
		resources :departments, except: [:new, :edit]
		resources :messages, except: [:new, :edit, :update]
  end

  root 'static_pages#root'
end
