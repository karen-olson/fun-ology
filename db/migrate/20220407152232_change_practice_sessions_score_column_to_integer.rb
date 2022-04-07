class ChangePracticeSessionsScoreColumnToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :practice_sessions, :score, :integer
  end
end
