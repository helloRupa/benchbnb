import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const greeting = (currentUser) ? (
    <div className="nav">
      <span className="username">Hi {currentUser.username} / </span><a href="#" onClick={logout}>Logout</a>
    </div>
  ) : (
    <div className="nav">
      <Link to="/signup">Sign Up</Link> / <Link to="/login">Log In</Link>
    </div>
  );

  return (
    <div className="greeting">
      <Link to="/" className="logo"><h1>Bench BnB</h1></Link>
      { greeting }
    </div>
  );
};

export default Greeting;
