class SpeechTherapist < User
    validates :speech_therapist_id, absence: true
end
