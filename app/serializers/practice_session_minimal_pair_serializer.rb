class PracticeSessionMinimalPairSerializer < ActiveModel::Serializer
  attributes :id, :correct, :difficulty_level
  belongs_to :practice_session
  belongs_to :minimal_pair
end
