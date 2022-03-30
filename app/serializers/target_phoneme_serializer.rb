class TargetPhonemeSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :minimal_pairs
end
