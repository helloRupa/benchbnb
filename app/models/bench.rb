class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true
end
