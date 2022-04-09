class PracticeSessionsController < ApplicationController
    # remove!!
    skip_before_action :authorize

    def create
        practice_session = PracticeSession.create!(practice_session_params)
        render json: practice_session, status: :created
    end

    def current_practice_session
        current_practice_session = PracticeSession.where("current = 'true'")

        if current_practice_session
            render json: current_practice_session[0], status: :ok
        else 
            render json: "Error: No current practice session found", status: :not_found
        end
    end

    private

    def practice_session_params
        params.permit(:type, :date, :notes, :student_id, :current)
    end
end
