Rails.application.routes.draw do


  root 'resume#index'

  resource :resume

end
