# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

locations = [
  {
    description: 'Philz Coffee',
    lat: 37.759313,
    lng: -122.4374416,
    seating: 3
  },
  {
    description: 'ImagiKnit',
    lat: 37.7603486,
    lng: -122.4335928,
    seating: 5
  },
  {
    description: 'Elixir',
    lat: 37.7640232,
    lng: -122.4290192,
    seating: 2
  },
  {
    description: 'DNA Lounge',
    lat: 37.7695116,
    lng: -122.4148415,
    seating: 7
  },
  {
    description: 'Java Beach Cafe',
    lat: 37.7596113,
    lng: -122.5086366,
    seating: 4
  }
]

ActiveRecord::Base.transaction do
  # Clear tables and reset id value
  [Bench].each do |c|
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE #{c.table_name} RESTART IDENTITY;")
  end

  locations.each do |loc|
    Bench.create(loc)
  end
end