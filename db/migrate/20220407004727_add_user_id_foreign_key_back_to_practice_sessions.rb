class AddUserIdForeignKeyBackToPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    add_reference :practice_sessions, :user, foreign_key: true
  end
end
