class Comment < ActiveRecord::Base
  validates :body, :user_id, :photo_id, :x_pos, :y_pos, presence: true

  before_validation :assure_position

  belongs_to :user
  belongs_to :photo

  def assure_position
    self.x_pos = 0
    self.y_pos = 0
  end
end
