class UserSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :username, :email, :password_digest, :date_of_birth
end
