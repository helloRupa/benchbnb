import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      }
    };
  }
  
  const store = configureStore(preloadedState);

  /* TEST CODE DELETE WHEN DONE */
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  /* DELETE ABOVE WHEN DONE */

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});