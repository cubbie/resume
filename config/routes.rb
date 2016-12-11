Rails.application.routes.draw do


  root 'resume#index'

  post '/' => 'resume#email', as: :email

end
