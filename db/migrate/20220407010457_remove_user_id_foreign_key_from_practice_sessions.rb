class RemoveUserIdForeignKeyFromPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    remove_reference :practice_sessions, :user, foreign_key: true
  end
end
