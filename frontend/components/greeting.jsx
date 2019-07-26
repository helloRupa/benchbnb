import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const greeting = (currentUser) ? (
    <div>
      <p>Welcome {currentUser.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/signup" />
      <Link to="/login" />
    </div>
  );

  return (
    <div>
      {greeting}
    </div>
  );
};

export default Greeting;