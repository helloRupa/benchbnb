# Bench BnB
A web app for viewing and reviewing benches, centered in San Francisco.

Live Demo: http://bench-bnb-by-rupa.herokuapp.com/#/

## Features
* User authentication
* Review existing benches
* Add new benches by clicking the map
* Sort and filter benches

## Dependencies
* Rails 5.2.3
* Ruby 2.5.1
* AWS (for image storage)
* Webpack
* React
* Redux
* NPM

For a full list, check package.json and Gemfile.

## Set Up Project
Run the following commands to install Ruby/Rails/React dependencies and to set up the database:

* bundle install
* bundle exec rails db:create
* bundle exec rails db:migrate
* bundle exec rails db:seed (Seed file may not be up to date with current schema!)
* npm install

Add the following to your Rails credentials:

* google_maps_api_key: YOUR-API-KEY
* AWS credentials (set up your buckets first!!)

## Run Project Locally
Run the following commands:

* npm run webpack
* rails s

Navigate to localhost:3000/