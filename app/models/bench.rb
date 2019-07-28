class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true
  validates :lat, :lng, :seating, numericality: true

  def self.in_bounds(bounds)
    lats = [bounds['northEast']['lat'], bounds['southWest']['lat']].map(&:to_f).sort
    lngs = [bounds['northEast']['lng'], bounds['southWest']['lng']].map(&:to_f).sort

    Bench.all.reduce([]) do |benches, bench|
      if bench['lat'].between?(lats[0], lats[1]) && bench['lng'].between?(lngs[0], lngs[1])
        benches << bench
      end

      benches
    end
  end

  def self.apply_filters(bounds, min_seating, max_seating)
    return Bench.in_bounds(bounds) unless Bench.seating_is_valid?(min_seating.to_i, max_seating.to_i)

    Bench.in_bounds(bounds).reduce([]) do |benches, bench|
      benches << bench if bench.seating.between?(min_seating.to_i, max_seating.to_i)
      benches
    end
  end

  private

  def self.seating_is_valid?(min_seating, max_seating)
    min_seating && max_seating && (min_seating <= max_seating)
  end
end
