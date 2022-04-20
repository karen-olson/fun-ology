class Student < User
    has_many :practice_sessions
    validates :username, :full_name, :email, :date_of_birth, :speech_therapist_id, presence: true
    validates :username, :email, uniqueness: true
end
