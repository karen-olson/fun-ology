class ChangePracticeSessionsDifficultyLevelToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :practice_sessions, :average_difficulty_level, :integer
  end
end
