class CreatePracticeSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :practice_sessions do |t|
      t.string :type
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :date
      t.text :notes
      t.float :score
      t.float :average_difficulty_level

      t.timestamps
    end
  end
end
