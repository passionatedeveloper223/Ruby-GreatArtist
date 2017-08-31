# json.extract! @user, :id, :username


json.user do
  json.extract! @user, :id, :username, :name, :website, :bio, :email
  json.avatar_url asset_path(@user.avatar.url)
  json.postIds @user.posts.map(&:id)
  json.followerIds @user.followers.map(&:id)
  json.followeeIds @user.followed_artists.map(&:id)
end


json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.image_url asset_path(post.image.url)
      json.id post.id
    end
  end
end
