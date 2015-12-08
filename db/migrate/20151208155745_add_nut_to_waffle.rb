class AddNutToWaffle < ActiveRecord::Migration
  def change
    add_column :waffles, :nut, :string
  end
end
