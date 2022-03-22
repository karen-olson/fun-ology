class Student < User
    validates :speech_therapist_id, presence: true
end
