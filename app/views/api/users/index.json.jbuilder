@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.profile_image_url user.profile_image_url.url
    json.bio user.bio
  end
end
