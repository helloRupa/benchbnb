export const fetchBenches = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: filters,
  });
};

export const createBench = (bench) => {
  return $.ajax({
    method: 'POST',
    url: 'api/benches',
    data: { bench },
  });
}

export const showBench = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/benches/${id}`
  });
}
