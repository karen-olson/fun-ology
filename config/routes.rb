Rails.application.routes.draw do

  get "/students/alphabetical", to: "students#alphabetical_index"
  get "/students/:id/practice_sessions", to: "students#practice_sessions"

  get "/practice_sessions/current", to: "practice_sessions#show_current_practice_session"
  patch "/practice_sessions/:id/calculate_score", to: "practice_sessions#calculate_score"

  post "/signup/speech_therapist", to: "speech_therapists#create"
  post "/signup/student", to: "students#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :practice_session_minimal_pairs, only: :create
  resources :practice_sessions, only: [:create, :update]

  resources :avatars, only: :index

  resources :minimal_pairs, only: :index

  resources :target_phonemes, only: [:index, :show]

  resources :phonological_processes, only: :index

  resources :users, only: [:index, :show]
  resources :speech_therapists, only: [:index, :create]
  resources :students, only: [:index, :show, :create, :update]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
