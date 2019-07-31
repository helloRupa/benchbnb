export const fetchBenches = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: filters,
  });
};

export const createBench = (formData) => {
  return $.ajax({
    url: '/api/benches',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const showBench = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/benches/${id}`
  });
};
