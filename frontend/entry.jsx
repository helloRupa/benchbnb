import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

/* TEST CODE DELETE WHEN DONE */
import * as Actions from './actions/session_actions';
window.Actions = Actions;
/* END TEST CODE DELETE WHEN DONE */

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

  /* TEST CODE DELETE WHEN DONE */
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  /* DELETE ABOVE WHEN DONE */

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});