import React from 'react';

const Reviews = ({ reviews }) => {

  const showReview = (review) => (
    <div>
      <h3>{review.username}</h3>
      <p>{review.rating}</p>
      <p>{review.comment}</p>
    </div>
  );

  return (
    <div>
      {reviews.map((review) => <div key={review.id}>{showReview(review)}</div>)}
    </div>
  );
};

export default Reviews;
