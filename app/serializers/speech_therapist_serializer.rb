class SpeechTherapistSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :username, :password_digest
end
