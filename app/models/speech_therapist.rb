class SpeechTherapist < User
    validates :username, :password, :full_name, :email, presence: true
    validates :speech_therapist_id, absence: true
end
