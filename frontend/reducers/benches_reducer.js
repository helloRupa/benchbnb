import { RECEIVE_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);

  let stateCopy = merge({}, state);

  switch(action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return stateCopy;
  }
};

export default benchesReducer;