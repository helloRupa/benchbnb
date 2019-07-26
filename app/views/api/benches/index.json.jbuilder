json.set! 'benches' do
  json.array! @benches do |bench|
    json.partial! 'api/benches/bench', bench: bench
  end
end