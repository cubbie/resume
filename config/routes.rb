Rails.application.routes.draw do

  root 'resume#index'
  resources :resume, only: %i(new create)
  post '/', to: 'messages#create'
  get 'contact', to: 'messages#new', as: "contact"
  post 'contact', to: 'messages#create'

end
