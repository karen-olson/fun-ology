class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    # Why does it say that the session hasn't loaded yet when using RTK Query?
    # #<ActionDispatch::Request::Session:0x8458 not yet loaded>
    # The session hash isn't being sent with the request when using RTK Query, but it is when using fetch. 
    @current_user = User.find_by(id: session[:user_id])
    
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

end
