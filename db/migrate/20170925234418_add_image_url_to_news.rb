class AddImageUrlToNews < ActiveRecord::Migration[5.1]
  def change
    add_column :news, :image_url, :string
  end
end
