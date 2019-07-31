json.extract! bench, :id, :description, :lat, :lng, :seating, :num_reviews
json.rating bench.avg_rating

unless bench.photo.attached?
  json.image 'https://11luuvtufne6f2y33i1nvedi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/no-image-icon.png'
else
  json.image url_for(bench.photo)
end