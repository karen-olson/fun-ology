class PhonologicalProcessesController < ApplicationController
    # remove
    # skip_before_action :authorize, only: :index

    def index
        phonological_processes = PhonologicalProcess.all
        render json: phonological_processes
    end
end
