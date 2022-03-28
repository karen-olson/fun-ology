class TargetPhonemesController < ApplicationController

    def index
        target_phonemes = TargetPhoneme.all 
        render json: target_phonemes
    end
end
