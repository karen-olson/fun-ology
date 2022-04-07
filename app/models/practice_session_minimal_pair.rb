class PracticeSessionMinimalPair < ApplicationRecord
  belongs_to :practice_session
  belongs_to :minimal_pair

  validates :minimal_pair_id, uniqueness: { scope: :practice_session,
    message: "Should only record one data point per minimal pair during each session" }
  validates :correct, inclusion: { in: [true, false], 
    message: "%{value} must be true or false"}
  validates :difficulty_level, presence: true, inclusion: { in: [1, 2, 3],
    message: "%{value} is not a valid difficulty level. Please specify a value of 1 for easy, 2 for medium, or 3 for hard." }
end
