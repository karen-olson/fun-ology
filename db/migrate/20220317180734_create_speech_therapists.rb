class CreateSpeechTherapists < ActiveRecord::Migration[6.1]
  def change
    create_table :speech_therapists do |t|
      t.string :full_name
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
