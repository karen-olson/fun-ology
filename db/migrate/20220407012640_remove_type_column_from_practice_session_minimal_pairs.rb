class RemoveTypeColumnFromPracticeSessionMinimalPairs < ActiveRecord::Migration[6.1]
  def change
    remove_column :practice_session_minimal_pairs, :type
  end
end
