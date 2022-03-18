class DropTestDataTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :test_data
  end
end
