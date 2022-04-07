class PracticeSession < ApplicationRecord
  belongs_to :student
  has_many :practice_session_minimal_pairs
  has_many :minimal_pairs, through: :practice_session_minimal_pairs

  validates :type, presence: true
end
