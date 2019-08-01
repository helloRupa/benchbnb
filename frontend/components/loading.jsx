import React from 'react';

const Loading = ({ loading }) => {
  const loadScreen = (loading) ? <div className="loading"><span>Benches are loading</span></div> : '';

  return (
    <div>
      { loadScreen }
    </div>
  );
};

export default Loading;
