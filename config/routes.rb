Rails.application.routes.draw do


  root 'resume#index'

  post '/' => 'resume#index', as: :email

end
