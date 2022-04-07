class ChangeNullOptionOnPracticeSessionsUserIdToFalse < ActiveRecord::Migration[6.1]
  def change
    change_column_null :practice_sessions, :user_id, false
  end
end
