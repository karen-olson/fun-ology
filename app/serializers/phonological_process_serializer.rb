class PhonologicalProcessSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :target_phonemes
end
