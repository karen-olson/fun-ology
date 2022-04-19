class PracticeSession < ApplicationRecord
  belongs_to :student
  has_many :practice_session_minimal_pairs
  has_many :minimal_pairs, through: :practice_session_minimal_pairs

  validates :type, presence: true
  
  def update_score
    scores = self.practice_session_minimal_pairs.map{|practice_session_minimal_pair|   
      practice_session_minimal_pair.correct}

    if scores == []
      return 
    else
      number_correct = scores.count(true)

      average_score = ((number_correct.to_f / scores.size.to_f) * 100).truncate

      self.update(score: average_score)
    end
  end

  def update_average_difficulty_level
    difficulty_levels = self.practice_session_minimal_pairs.map{|practice_session_minimal_pair|
      practice_session_minimal_pair.difficulty_level}
    
      if difficulty_levels == []
        return
      else
        average_difficulty_level = (difficulty_levels.sum.to_f / difficulty_levels.size.to_f).round.truncate
        
        self.update(average_difficulty_level: average_difficulty_level)
      end
  end
end
