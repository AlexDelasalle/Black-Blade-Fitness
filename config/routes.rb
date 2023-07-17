Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/favicon.ico', to: redirect('/public/favicon.ico')

  root 'pages#home'

  get 'home', to: 'pages#home'

  get '/about', to: 'pages#about'

  get '/services', to: 'pages#services'

  get '/testimonials', to: 'pages#testimonials'

  get '/contact', to: 'pages#contact'

end
