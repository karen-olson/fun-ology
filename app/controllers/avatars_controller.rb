class AvatarsController < ApplicationController
    skip_before_action :authorize

    def index
        avatars = Avatar.all 
        render json: avatars
    end
end
