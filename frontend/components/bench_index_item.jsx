import React from 'react';
import { withRouter } from 'react-router-dom';

const BenchIndexItem = ({ bench, history }) => {
  const goToBench = () => {
    history.push(`/benches/${bench.id}`);
  };

  return (
    <ul className="bench-index-item" key={bench.id} onClick={goToBench} >
      <img src={ bench.image } />
      <li><h2>{bench.description}</h2></li>
      <li>Score: {bench.rating}</li>
      <li>{bench.seating} seats</li>
    </ul>
  );
};

export default withRouter(BenchIndexItem);