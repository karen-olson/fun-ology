class Student < ApplicationRecord
  has_secure_password

  belongs_to :speech_therapist

  validates :full_name, :date_of_birth, :grade, :email, :password, presence: true
  validates :username, presence: true, uniqueness: true
end
