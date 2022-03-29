class AvatarsController < ApplicationController
    # remove
    skip_before_action :authorize

    def index
        avatars = Avatar.all 
        render json: avatars
    end
end
