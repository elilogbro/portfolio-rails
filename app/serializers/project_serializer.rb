class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :github_url, :image, :details

  has_many :technologies
  has_one :video
end
