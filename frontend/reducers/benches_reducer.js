import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';
import merge from 'lodash/merge';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);

  let stateCopy = merge({}, state);

  switch(action.type) {
    case RECEIVE_BENCHES:
      return action.benches || {};
    case RECEIVE_BENCH:
      stateCopy[action.bench.id] = action.bench;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export default benchesReducer;