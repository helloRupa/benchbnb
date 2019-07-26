json.set! 'benches' do
  @benches.array! do |bench|
    json.partial! 'api/benches/bench', bench: bench
  end
end