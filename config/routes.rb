Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :products
  end 

  get '/profile', to: 'products#profile'
end
