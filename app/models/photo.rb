
class Photo < ActiveRecord::Base
  validates :title, :description, :photo_url, :user_id, presence: true


  has_many :comments

  belongs_to :user

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag
end
