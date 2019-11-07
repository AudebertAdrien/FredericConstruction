Rails.application.routes.draw do
  root to: 'homes#index'
  resources :homes, only: [:index]
  resources :maconneries, only: [:index]
  resources :contacts, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
