class StudentsController < ApplicationController
    skip_before_action :authorize, only: :create


    def create 
        student = Student.create!(student_params)
        # log them in after creating an account?
        # probably not
        #       ??? session[:user_id] = student.id
        render json: student, status: :created
    end

    private 

    def student_params
        params.permit(:full_name, :username, :email, :password, :password_confirmation, :speech_therapist_id, :date_of_birth)
    end
end
