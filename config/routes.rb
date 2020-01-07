Rails.application.routes.draw do
  devise_for :admins
  root to: 'homes#index'
  resources :homes, only: [:index]
  resources :maconneries, only: [:index]
  resources :charpentes, only: [:index]
  resources :couv_zings, only: [:index]
  resources :carr_faiences, only: [:index]
  resources :mentions, only: [:index]
  resources :realisations

  resources :contacts, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
