Rails.application.routes.draw do
  resources :videos
  resources :technologies
  resources :projects
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
