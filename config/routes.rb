Rails.application.routes.draw do
  post "/signup/speech_therapist", to: "speech_therapists#create"
  post "/signup/student", to: "students#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :students
  resources :speech_therapists
  resources :users
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
