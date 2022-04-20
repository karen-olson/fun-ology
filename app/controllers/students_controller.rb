class StudentsController < ApplicationController
    skip_before_action :authorize, only: :create

    def index 
        students = Student.all
        render json: students
    end

    def alphabetical_index
        alphabetized_students = Student.alphabetize
        render json: alphabetized_students
    end

    def show
        student = Student.find(params[:id])
        render json: student
    end

    def create 
        student = Student.create!(student_params)
        render json: student, status: :created
    end

    def update
        student = Student.find(params[:id])
        student.update!(student_params)
        render json: student, status: :ok
    end

    def practice_sessions
        student = Student.find(params[:id])

        practice_session_events = student.practice_sessions.order("date")

        if practice_session_events
            render json: practice_session_events, status: :ok
        else 
            render json: {error: "Practice sessions not found"}, status: :not_found
        end
    end

    private 

    def student_params
        params.permit(:id, :full_name, :username, :email, :password, :password_confirmation, :speech_therapist_id, :date_of_birth, :avatar_id)
    end
end
