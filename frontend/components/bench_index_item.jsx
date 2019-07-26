import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return (
    <div className="bench-index-item">
      <p>{bench.description}</p>
    </div>
  );
};

export default BenchIndexItem;