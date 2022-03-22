class UserSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :username, :email, :date_of_birth, :speech_therapist_id
end
