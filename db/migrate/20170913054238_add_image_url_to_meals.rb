class AddImageUrlToMeals < ActiveRecord::Migration[5.1]
  def change
    add_column :meals, :image_url, :string
  end
end
