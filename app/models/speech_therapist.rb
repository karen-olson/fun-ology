class SpeechTherapist < ApplicationRecord
    has_secure_password
    has_many :students

    validates :full_name, :email, :password, presence: true
    # will validating the uniqueness of password mess anything up?
    validates :username, presence: true, uniqueness: true
end
