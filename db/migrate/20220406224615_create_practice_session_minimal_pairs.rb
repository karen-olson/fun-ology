class CreatePracticeSessionMinimalPairs < ActiveRecord::Migration[6.1]
  def change
    create_table :practice_session_minimal_pairs do |t|
      t.string :type
      t.belongs_to :practice_session, null: false, foreign_key: true
      t.belongs_to :minimal_pair, null: false, foreign_key: true
      t.boolean :correct
      t.integer :difficulty_level

      t.timestamps
    end
  end
end
