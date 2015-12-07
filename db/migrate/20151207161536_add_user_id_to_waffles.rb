class AddUserIdToWaffles < ActiveRecord::Migration
  def change
    add_column :waffles, :user_id, :integer
    add_index :waffles, :user_id
  end
end
