class AddStudentIdColumnToPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    add_column :practice_sessions, :student_id, :bigint
  end
end
