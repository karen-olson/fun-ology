class PracticeSessionsController < ApplicationController
    # remove!!
    skip_before_action :authorize

    def create
        practice_session = PracticeSession.create!(practice_session_params)
        render json: practice_session, status: :created
    end

    def calculate_score
        practice_session = PracticeSession.find(params[:id])
        practice_session.update_score
        practice_session.update_average_difficulty_level
        render json: practice_session, status: :ok
    end

    def update
        practice_session = PracticeSession.find(params[:id])
        practice_session.update!(practice_session_params)
        render json: practice_session, status: :ok
    end

    def get_current_practice_session
        current_practice_session = PracticeSession.where("current = 'true'")[0]
    
        if current_practice_session
            render json: current_practice_session, status: :ok
        else 
            render json: "Error: No current practice session found", status: :not_found
        end
    end

    private

    def practice_session_params
        params.permit(:id, :type, :date, :notes, :student_id, :current)
    end
end
