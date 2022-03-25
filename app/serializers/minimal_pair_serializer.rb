class MinimalPairSerializer < ActiveModel::Serializer
  attributes :id, :first_word, :first_image_url, :second_word, :second_image_url
  has_one :target_phoneme
end