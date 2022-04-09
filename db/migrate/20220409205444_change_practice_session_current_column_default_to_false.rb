class ChangePracticeSessionCurrentColumnDefaultToFalse < ActiveRecord::Migration[6.1]
  def change
    change_column_default :practice_sessions, :current, false
  end
end
