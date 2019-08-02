import React from 'react';

const Reviews = ({ reviews }) => {

  const makeStars = (review) => {
    return (
      <div className="static-stars">
        { [1, 2, 3, 4, 5].map((val) => (
        <span 
          key={val} 
          className={(val <= review.rating) ? 'selected-star' : ''}>
          &#9733; 
        </span>)) }
      </div>
    );
  }

  const showReview = (review) => (
    <div className="user-review">
      <h4>{review.username}</h4>
      <span className="date">{review.date}</span>
      <span className="rating">{makeStars(review)}</span>
      <p>{review.comment}</p>
    </div>
  );

  const sortedReviews = () => (reviews.sort((a, b) => new Date(b.date) - new Date(a.date)));

  return (
    <div className="reviews">
      { sortedReviews().map((review) => <div key={review.id}>{showReview(review)}</div>) }
    </div>
  );
};

export default Reviews;
