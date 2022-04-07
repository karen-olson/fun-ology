class AddStudentIdIndexToPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    add_index :practice_sessions, :student_id
  end
end
