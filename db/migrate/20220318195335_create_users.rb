class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :type
      t.string :full_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :date_of_birth

      t.timestamps
    end
  end
end
