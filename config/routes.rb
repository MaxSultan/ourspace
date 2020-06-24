Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :products
  end 

  namespace :api do
    resources :users do 
      resources :posts
    end 
  end 

  get '/api/get_all_posts', to: 'api/posts#all'
  get '/profile', to: 'products#profile'
 
end
