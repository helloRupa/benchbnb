class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  validates :lat, :lng, numericality: true

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
end
