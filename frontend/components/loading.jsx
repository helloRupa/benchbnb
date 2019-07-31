import React from 'react';

const Loading = ({ loading }) => {
  const loadScreen = (loading) ? <div className="loading">Content is loading</div> : '';

  return (
    <div>
      { loadScreen }
    </div>
  );
};

export default Loading;
