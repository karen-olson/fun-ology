class AddAvatarForeignKeyToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :avatars, foreign_key: true
  end
end
