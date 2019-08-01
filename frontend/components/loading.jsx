import React from 'react';

const Loading = ({ loading }) => {
  const transition = (loading) ? '' : 'fade-out';

  return (
    <div className={`loading ${transition}`}><span>Benches are loading</span></div>
  );
};

export default Loading;
