class PracticeSessionMinimalPairsController < ApplicationController
    # remove
    skip_before_action :authorize

    def create
        practice_session_minimal_pair = PracticeSessionMinimalPair.create!(practice_session_minimal_pair_params)
        render json: practice_session_minimal_pair, status: :created
    end

    private

    def practice_session_minimal_pair_params
        params.permit(:practice_session_id, :minimal_pair_id, :correct, :difficulty_level)
    end
end
