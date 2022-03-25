class Student < User
    validates :username, :password, :full_name, :email, :date_of_birth, :speech_therapist_id, presence: true
    validates :username, :email, uniqueness: true
end
