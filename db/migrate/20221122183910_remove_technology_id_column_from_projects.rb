class RemoveTechnologyIdColumnFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :technology_id
  end
end
