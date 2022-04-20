class TargetPhonemeSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :minimal_pairs
  belongs_to :phonological_process
end
