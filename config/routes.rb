Rails.application.routes.draw do
  resources :practice_session_minimal_pairs, only: :create
  resources :practice_sessions, only: :create
  # resources :homework_sessions
  # resources :therapy_sessions
  get "/current_practice_session", to: "practice_sessions#current_practice_session"
  post "/signup/speech_therapist", to: "speech_therapists#create"
  post "/signup/student", to: "students#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :avatars, only: :index
  resources :minimal_pairs, only: :index
  resources :target_phonemes, only: [:index, :show]
  resources :phonological_processes, only: :index
  resources :students
  resources :speech_therapists
  resources :users
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
