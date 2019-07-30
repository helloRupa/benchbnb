json.partial! 'api/benches/bench', bench: @bench

if @bench.reviews.count == 0
  json.set! 'reviews', {}
else
  json.set! 'reviews' do
    @bench.reviews.each do |review|
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  end
end
