json.extract! review, :id, :bench_id, :rating, :comment, :user_id
json.set! 'username', review.user.username