class Review < ApplicationRecord
  validates :user_id, :bench_id, :rating, :comment, presence: true
  validates :bench_id, uniqueness: { scope: :user_id, message: 'has already been reviewed' }
  validates :rating, numericality: { only_integer: true, greater_than: 0, less_than: 6 }

  belongs_to :user

  belongs_to :bench
end