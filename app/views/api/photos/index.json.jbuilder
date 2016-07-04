json.array! @photos do |photo|
  json.extract!(photo, :title, :description, :photo_url, :id)
  json.username photo.user.username
  json.comments photo.comments, partial: 'api/comments/comment', as: :comment
end
