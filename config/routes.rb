Rails.application.routes.draw do


  root 'resume#index'

  get '/about' => 'resume#about'
  get '/contact' => 'resume#contact'
  get '/experience' => 'resume#experience'
  get '/portfolio' => 'resume#portfolio'

end
