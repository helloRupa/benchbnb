import { RECEIVE_BENCH_ERRORS, RECEIVE_BENCH, RECEIVE_BENCHES, RECEIVE_SINGLE_BENCH } from '../actions/bench_actions';
import { ADD_REVIEW } from '../actions/review_actions';

const benchErrorsReducers = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BENCH_ERRORS:
      return action.errors || [];
    case RECEIVE_BENCH:
    case RECEIVE_BENCHES:
    case RECEIVE_SINGLE_BENCH:
    case ADD_REVIEW:
      return [];
    default:
      return state;
  }
};

export default benchErrorsReducers;
