Rails.application.routes.draw do
  devise_for :users

  resources :waffles do
    member do
      put "like", to: "waffles#upvote"
    end
  end

  root 'waffles#index'
end
