class SpeechTherapistsController < ApplicationController
    skip_before_action :authorize, only: :create
    # remove
    # skip_before_action :authorize, only: :index

    def create 
        speech_therapist = SpeechTherapist.create!(speech_therapist_params)
        render json: speech_therapist, status: :created
    end

    def index
        speech_therapists = SpeechTherapist.all 
        render json: speech_therapists 
    end

    private

    def speech_therapist_params
        params.permit(:full_name, :username, :email, :password, :password_confirmation, :avatar_id)
    end
end
