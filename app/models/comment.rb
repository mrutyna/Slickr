class Comment < ActiveRecord::Base
  validates :body, :x_pos, :y_pos, :user_id, :photo_id, presence: true

  belongs_to :user
  belongs_to :photo
end
