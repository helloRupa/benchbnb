import { LOADING, DONE_LOADING } from '../actions/loading_actions';

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case LOADING:
      return true;
    case DONE_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
