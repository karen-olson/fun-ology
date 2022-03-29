class RemoveAvatarsReferenceFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_reference :users, :avatars, foreign_key: true
  end
end
