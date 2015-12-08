class AddIceCreamToWaffle < ActiveRecord::Migration
  def change
    add_column :waffles, :ice_cream, :string
  end
end
