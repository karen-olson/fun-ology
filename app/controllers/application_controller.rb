class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with :render_unprocessable_entity_response

  before_action :authorize

  private

  # def find_current_user
    # @current_user = SpeechTherapist.find_by(id: session[:user_id])
    #     if !@current_user
    #         @current_user = Student.find_by(id: session[:user_id])
    #     end
    def find_current_user_by_role(role)
      model_name = role.upcase()
      @current_user = model_name.find_by(id: session[:user_id])
  end

  def authorize
    render json: {errors: ["Not authorized"]}, status: unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: unprocessable_entity
  end

end
