class PracticeSessionSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :type, :date, :notes, :score, :average_difficulty_level, :average_difficulty_level_descriptor, :get_minimal_pair, :current
  belongs_to :student

  def average_difficulty_level_descriptor
    case self.object.average_difficulty_level
    when 1
      "easy"
    when 2
      "medium"
    when 3
      "hard"
    else 
      ""
    end
  end 

  # def get_target_phoneme
  #   self.object.get_target_phoneme
  # end
  
end
