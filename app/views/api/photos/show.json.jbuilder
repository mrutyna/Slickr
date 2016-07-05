if @photo
  json.extract!(@photo, :title, :description, :photo_url, :id)
  # json.username @photo.user.username
  json.comments @photo.comments, partial: 'api/comments/comment', as: :comment
end


if @errors
  json.errors do
    json.array! @errors
  end
end
