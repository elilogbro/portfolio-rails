class AddProjectIdColumnToTechnologies < ActiveRecord::Migration[7.0]
  def change
    add_column :technologies, :project_id, :integer
  end
end
