class AddColumnCurrentToPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    add_column :practice_sessions, :current, :boolean
    add_index :practice_sessions, :current
  end
end
