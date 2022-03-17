class StudentSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :date_of_birth, :grade, :email, :username, :password_digest
  has_one :speech_therapist
end
