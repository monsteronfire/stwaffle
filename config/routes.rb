Rails.application.routes.draw do
  devise_for :users
  resources :waffles
  root 'waffles#index'
end
