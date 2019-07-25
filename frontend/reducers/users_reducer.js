import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state, action) => {
  Object.freeze(state);
  let stateCopy = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return stateCopy;
  }
};

export default usersReducer;
