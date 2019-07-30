class Review < ApplicationRecord
  validates :user_id, :bench_id, :rating, :comment, presence: true
  validates :bench_id, uniqueness: { scope: :user_id, message: 'has already been reviewed' }
  validates :rating, numericality: { only_integer: true, greater_than: 0, less_than: 6 }

  before_destroy :update_bench

  belongs_to :user

  belongs_to :bench

  def update_bench
    bench = self.bench
    bench.num_reviews -= 1
    bench.review_total -= self.rating
    bench.save!
  end
end