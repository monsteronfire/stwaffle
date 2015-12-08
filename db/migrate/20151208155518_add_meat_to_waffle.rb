class AddMeatToWaffle < ActiveRecord::Migration
  def change
    add_column :waffles, :meat, :string
  end
end
