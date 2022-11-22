class Project < ApplicationRecord
    has_many :technologies, dependent: :destroy
    has_one :video, dependent: :destroy
end
