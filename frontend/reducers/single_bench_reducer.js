import { RECEIVE_SINGLE_BENCH } from '../actions/bench_actions';

const singleBenchReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SINGLE_BENCH:
      return action.bench;
    default:
      return state;
  }
}

export default singleBenchReducer;
