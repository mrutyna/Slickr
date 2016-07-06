if comment
  json.extract!(comment, :body, :user_id, :photo_id, :id)
end
