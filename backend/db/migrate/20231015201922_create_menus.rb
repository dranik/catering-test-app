class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|

      t.string :name, null: false
      t.decimal :price, null: false
      t.text :description
      t.timestamps

      t.index :name, unique: true
    end
  end
end
