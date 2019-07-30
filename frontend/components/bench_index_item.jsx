import React from 'react';
import { withRouter } from 'react-router-dom';

const BenchIndexItem = ({ bench, showBench, history }) => {
  const fetchBench = () => {
    // showBench(bench.id);
    history.push(`/benches/${bench.id}`);
  };

  return (
    <div className="bench-index-item" key={bench.id} onClick={fetchBench} >
      <p>{bench.description}</p>
      <p>{bench.seating} seats</p>
    </div>
  );
};

export default withRouter(BenchIndexItem);