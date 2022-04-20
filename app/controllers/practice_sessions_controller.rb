class PracticeSessionsController < ApplicationController
    skip_before_action :authorize

    def practice_sessions_for_student
        student = Student.find(params[:id])

        practice_session_events = student.practice_sessions.order("date")

        if practice_session_events
            render json: practice_session_events, status: :ok
        else 
            render json: {error: "Practice sessions not found"}, status: :not_found
        end
    end

    def create
        practice_session = PracticeSession.create!(practice_session_params)
        render json: practice_session, status: :created
    end

    def update
        practice_session = PracticeSession.find(params[:id])
        practice_session.update!(practice_session_params)
        render json: practice_session, status: :ok
    end

    def show_current_practice_session
        current_practice_session = PracticeSession.where("current = 'true'")[0]
    
        if current_practice_session
            render json: current_practice_session, status: :ok
        else 
            render json: "Error: No current practice session found", status: :not_found
        end
    end

    def destroy_multiple_practice_sessions
        practice_sessions = PracticeSession.where(:id => params["_json"])
        practice_sessions.destroy_all
        head :no_content
    end

    def calculate_score
        practice_session = PracticeSession.find(params[:id])
        practice_session.update_score
        practice_session.update_average_difficulty_level
        render json: practice_session, status: :ok
    end

    private

    def practice_session_params
        params.permit(:id, :ids, :type, :date, :notes, :student_id, :current, :score, :average_difficulty_level)
    end
end
