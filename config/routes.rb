Rails.application.routes.draw do

  resources :contact_forms

  root 'resume#index'
  resources :resume, only: %i(new create)
  post '/' => 'resume#email', as: :email
  get 'contact', to: 'messages#new', as: 'contact'
  post 'contact', to: 'messages#create'

end
