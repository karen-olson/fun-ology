class AddDateOfBirthToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :date_of_birth, :datetime
  end
end
