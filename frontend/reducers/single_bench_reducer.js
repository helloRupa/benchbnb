import { RECEIVE_SINGLE_BENCH } from '../actions/bench_actions';
import { ADD_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const singleBenchReducer = (state = { reviews: {} }, action) => {
  let stateCopy = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_BENCH:
      return action.bench;
    case ADD_REVIEW:
      stateCopy.reviews[action.review.id] = action.review;
      stateCopy.num_reviews += 1;
      stateCopy.rating = (stateCopy.review_total + action.review.rating) / stateCopy.num_reviews;
      
      return stateCopy;
    default:
      return state;
  }
}

export default singleBenchReducer;
