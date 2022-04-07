class PracticeSessionsController < ApplicationController
    # remove!!
    skip_before_action :authorize

    def create
        practice_session = PracticeSession.create!(practice_session_params)
        render json: practice_session, status: :created
    end

    private

    def practice_session_params
        params.permit(:type, :date, :notes, :student_id)
    end
end
