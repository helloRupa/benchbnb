import { RECEIVE_BENCH_ERRORS, RECEIVE_BENCH, RECEIVE_BENCHES } from '../actions/bench_actions';

const benchErrorsReducers = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BENCH_ERRORS:
      return action.errors;
    case RECEIVE_BENCH:
    case RECEIVE_BENCHES:
      return [];
    default:
      return state;
  }
};

export default benchErrorsReducers;
