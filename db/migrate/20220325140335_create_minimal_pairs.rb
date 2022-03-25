class CreateMinimalPairs < ActiveRecord::Migration[6.1]
  def change
    create_table :minimal_pairs do |t|
      t.string :first_word
      t.string :first_image_url
      t.string :second_word
      t.string :second_image_url
      t.belongs_to :target_phoneme, null: false, foreign_key: true

      t.timestamps
    end
  end
end
