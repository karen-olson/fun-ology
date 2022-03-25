class TargetPhoneme < ApplicationRecord
  belongs_to :phonological_process
  has_many :minimal_pairs
end
