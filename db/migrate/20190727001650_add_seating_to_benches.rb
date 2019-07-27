class AddSeatingToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seating, :integer

    Bench.all.each do |bench|
      bench.seating = 4
      bench.save!
    end

    change_column_null :benches, :seating, false
  end
end
