class MinimalPair < ApplicationRecord
  belongs_to :target_phoneme
  has_many :practice_session_minimal_pairs
  has_many :practice_sessions, through: :practice_session_minimal_pairs
end
