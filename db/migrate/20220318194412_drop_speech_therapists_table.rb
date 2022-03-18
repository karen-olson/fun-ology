class DropSpeechTherapistsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :speech_therapists
  end
end
