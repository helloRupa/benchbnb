const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review },
  });
};

export const createReview;
