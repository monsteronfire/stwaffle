class AddIngredientXToWaffle < ActiveRecord::Migration
  def change
    add_column :waffles, :ingredient_x, :string
  end
end
