class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :github_url, :image

  has_many :technologies
  has_one :video
end
