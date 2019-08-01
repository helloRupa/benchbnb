import React from 'react';

const Reviews = ({ reviews }) => {

  const showReview = (review) => (
    <div>
      <h3>{review.username}</h3>
      <span className="date">{review.date}</span>
      <span className="rating">{review.rating}</span>
      <p>{review.comment}</p>
    </div>
  );

  const sortedReviews = () => (reviews.sort((a, b) => new Date(b.date) - new Date(a.date)));

  return (
    <div className="reviews">
      {sortedReviews().map((review) => <div key={review.id}>{showReview(review)}</div>)}
    </div>
  );
};

export default Reviews;
