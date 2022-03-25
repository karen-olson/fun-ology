class TargetPhonemeSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :phonological_process
end
