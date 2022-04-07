class RemoveUserIdFromPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    remove_column :practice_sessions, :user_id
  end
end
