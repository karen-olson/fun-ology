class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def show
        render json: @current_user
    end

    def index 
        users = User.all 
        render json: users 
    end
end
