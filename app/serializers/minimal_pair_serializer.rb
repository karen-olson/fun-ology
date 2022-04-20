class MinimalPairSerializer < ActiveModel::Serializer
  attributes :id, :first_word, :first_image_url, :second_word, :second_image_url
  belongs_to :target_phoneme
end
