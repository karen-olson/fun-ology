class PracticeSessionMinimalPairSerializer < ActiveModel::Serializer
  attributes :id, :type, :correct, :difficulty_level
  has_one :PracticeSession
  has_one :MinimalPair
end
