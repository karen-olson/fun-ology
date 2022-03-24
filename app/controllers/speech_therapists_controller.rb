class SpeechTherapistsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        speech_therapist = SpeechTherapist.create!(speech_therapist_params)
        # log them in after creating an account? probably not
        #       ??? session[:user_id] = speech_therapist.id
        render json: speech_therapist, status: :created
    end

    def speech_therapist_params
        params.permit(:full_name, :username, :email, :password, :password_confirmation)
    end
end
