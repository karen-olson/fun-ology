class AddSelfJoinToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :speech_therapist, foreign_key: { to_table: :users }
  end
end