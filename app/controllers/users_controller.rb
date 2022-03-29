class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def show
        render json: @current_user
    end

    def index 
        users = User.all 
        render json: users 
    end
end
