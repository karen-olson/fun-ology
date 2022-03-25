class CreateTargetPhonemes < ActiveRecord::Migration[6.1]
  def change
    create_table :target_phonemes do |t|
      t.string :name
      t.belongs_to :phonological_process, null: false, foreign_key: true

      t.timestamps
    end
  end
end
