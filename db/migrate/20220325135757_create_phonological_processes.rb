class CreatePhonologicalProcesses < ActiveRecord::Migration[6.1]
  def change
    create_table :phonological_processes do |t|
      t.string :name

      t.timestamps
    end
  end
end
