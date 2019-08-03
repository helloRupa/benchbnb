import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const message = [
    'Got your nose! Now get outta here!',
    'And you may ask yourself, well how did I get here?',
    'You broke the Internet. Time to play outside.',
    'Sorry, no cat videos here. Better move on.',
    'Ain\'t nodbody got time for this!'
  ][Math.floor(Math.random() * 5)];

  return (
    <section className="not-found">
      <h1>404: Page or Bench Not Found</h1>
      <div>{ message }</div>
      <Link to="/">Go home if you want.</Link>
    </section>
  )
};

export default NotFound;
