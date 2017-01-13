Rails.application.routes.draw do

  root 'resume#index'
  resources :resume, only: %i(new create)
  post '/', to: 'messages#create'


end
