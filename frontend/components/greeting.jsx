import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const greeting = (currentUser) ? (
    <div>
      <p>Hi {currentUser.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );

  return (
    <div className="greeting">
      {greeting}
    </div>
  );
};

export default Greeting;
