import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { id: null, };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let stateCopy = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      stateCopy.id = action.user.id;
console.log(stateCopy);
      return stateCopy;
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return stateCopy;
  }
};

export default sessionReducer;
