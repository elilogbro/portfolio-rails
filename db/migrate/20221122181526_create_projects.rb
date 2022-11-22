class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :github_url
      t.string :image
      t.integer :technology_id
      t.timestamps
    end
  end
end
