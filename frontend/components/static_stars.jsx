import React from 'react';

const StaticStars = ({ rating }) => {

  const starClass = (val) => {
    const roundedRating = Math.ceil(rating);

    if (val <= rating) {
      return 'selected-star';
    }

    if (val === roundedRating) {
      return 'partial-star';
    }

    return '';
  };

  return (
    <div className="static-stars">
      { [1, 2, 3, 4, 5].map((val) => (
      <span 
        key={val} 
        className={starClass(val)}>
        &#9733; 
      </span>)) }
    </div>
  );
};

export default StaticStars;
