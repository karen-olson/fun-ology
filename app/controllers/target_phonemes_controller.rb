class TargetPhonemesController < ApplicationController
    # remove
    # skip_before_action :authorize

    def index
        target_phonemes = TargetPhoneme.all 
        render json: target_phonemes
    end

    def show
        target_phoneme = TargetPhoneme.find(params[:id])
        render json: target_phoneme
    end
end
