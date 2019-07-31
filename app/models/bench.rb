class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true
  validates :lat, :lng, :seating, numericality: true

  has_many :reviews

  has_one_attached :photo

  def add_review(review)
    self.num_reviews += 1
    self.review_total += review.rating
    self.save!
  end

  def avg_rating
    return 0 if self.num_reviews.zero?
    self.review_total * 1.0 / self.num_reviews
  end

  def self.in_bounds(bounds)
    lats = [bounds['northEast']['lat'], bounds['southWest']['lat']].map(&:to_f).sort
    lngs = [bounds['northEast']['lng'], bounds['southWest']['lng']].map(&:to_f).sort

    Bench.where(lat: lats[0]..lats[1], lng: lngs[0]..lngs[1])
  end

  def self.apply_filters(bounds, min_seating, max_seating)
    return Bench.in_bounds(bounds) unless Bench.seating_is_valid?(min_seating.to_i, max_seating.to_i)

    Bench.in_bounds(bounds).where(seating: min_seating.to_i..max_seating.to_i)
  end

  private

  def self.seating_is_valid?(min_seating, max_seating)
    min_seating && max_seating && (min_seating <= max_seating)
  end
end
