class SessionsController < ApplicationController
    skip_before_action :authorize, only: create

    def create
        # user = find_user
        user = find_user_by_role(params[:role])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user 
        else 
            render json: { errors: ["Invalid username or password"] }, status: unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    # def find_user
        # user = SpeechTherapist.find_by(username: params[:username])
        # if !user
        #     user = Student.find_by(username: params[:username])
        # end
        # return user 
    def find_user_by_role(role)
        # how to pass in the role? params? params are the request body, so yes.
        model_name = role.upcase()
        model_name.find_by(username: params[:username])
    end
        
end
