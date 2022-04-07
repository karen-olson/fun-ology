class PracticeSessionSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :type, :date, :notes, :score, :average_difficulty_level
  belongs_to :student
end
