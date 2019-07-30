json.partial! 'api/benches/bench', bench: @bench

json.set! 'reviews' do
  @bench.reviews.each do |review|
    json.partial! 'api/reviews/review', review: review
  end
end