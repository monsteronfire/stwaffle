class AddFruitToWaffles < ActiveRecord::Migration
  def change
    add_column :waffles, :fruit, :string
  end
end
