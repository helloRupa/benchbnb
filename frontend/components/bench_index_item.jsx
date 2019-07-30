import React from 'react';
import { withRouter } from 'react-router-dom';

const BenchIndexItem = ({ bench, history }) => {
  const goToBench = () => {
    history.push(`/benches/${bench.id}`);
  };

  return (
    <div className="bench-index-item" key={bench.id} onClick={goToBench} >
      <p>{bench.description}</p>
      <p>Score: {bench.rating}</p>
      <p>{bench.seating} seats</p>
    </div>
  );
};

export default withRouter(BenchIndexItem);