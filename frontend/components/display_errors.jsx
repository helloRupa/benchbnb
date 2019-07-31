import React from 'react';

const DisplayErrors = ({ errors }) => (
  <ul className="errors">
    { errors.map((err, idx) => <li key={idx}>{err}</li>) }
  </ul>
);

export default DisplayErrors;
