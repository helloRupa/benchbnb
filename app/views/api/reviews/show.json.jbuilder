json.set! 'review' do
  json.extract! @review, :bench_id, :user_id, :rating, :comment
end