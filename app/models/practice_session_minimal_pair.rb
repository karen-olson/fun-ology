class PracticeSessionMinimalPair < ApplicationRecord
  belongs_to :practice_session
  belongs_to :minimal_pair

  validates :correct, :difficulty_level, presence: true
  validates :difficulty_level, inclusion: { in: [1, 2, 3],
    message: "%{value} is not a valid difficulty level. Please specify a value of 1 for easy, 2 for medium, or 3 for hard." }
end
