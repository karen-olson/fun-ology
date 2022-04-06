class PracticeSessionSerializer < ActiveModel::Serializer
  attributes :id, :type, :date, :notes, :score, :average_difficulty_level
  has_one :student
end
