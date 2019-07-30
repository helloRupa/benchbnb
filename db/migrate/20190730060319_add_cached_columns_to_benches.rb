class AddCachedColumnsToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :num_reviews, :integer, default: 0
    add_column :benches, :review_total, :integer, default: 0

    Bench.all.each do |bench|
      bench.num_reviews = bench.reviews.count
      bench.review_total = bench.reviews.sum(:rating)
      bench.save!
    end
  end
end
