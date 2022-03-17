class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :full_name
      t.datetime :date_of_birth
      t.integer :grade
      t.string :email
      t.string :username
      t.string :password_digest
      t.belongs_to :speech_therapist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
