class AddStudentForeignKeyToPracticeSessions < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :practice_sessions, :users, column: :student_id, primary_key: "id"
  end
end
