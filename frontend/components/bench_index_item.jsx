import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return (
    <div className="bench-index-item">
      <p>{bench.description}</p>
      <p>Seats: {bench.seating}</p>
    </div>
  );
};

export default BenchIndexItem;