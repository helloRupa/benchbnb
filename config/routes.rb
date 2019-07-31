Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:index, :create, :show]
    resources :reviews, only: [:create]
  end

  root 'static_pages#root'

  get "/*anything", to: redirect('/#/404'), constraints: lambda { |request| !request.path_parameters[:anything].start_with?('rails/') }
end
