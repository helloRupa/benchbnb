import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser,
        },
      },
      session: {
        id: window.currentUser.id,
      }
    };
  }
  
  const store = configureStore(preloadedState);

  delete window.currentUser;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});