class ChangePracticeSessionsStudentIdColumnToNullFalse < ActiveRecord::Migration[6.1]
  def change
    change_column_null :practice_sessions, :student_id, false
  end
end
