json.extract! bench, :id, :description, :lat, :lng, :seating, :num_reviews, :review_total
json.rating bench.avg_rating

unless bench.photo.attached?
  json.image asset_path('no-image-icon.png')
else
  json.image url_for(bench.photo)
end