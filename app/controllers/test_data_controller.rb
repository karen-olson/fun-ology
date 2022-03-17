class TestDataController < ApplicationController

    def index
        message = ["success"]
        render json: message
    end
end
