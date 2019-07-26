import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const filterReducer = (state = { bounds: {} }, action) => {
  Object.freeze(state);
  let stateCopy = merge({}, state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      stateCopy.bounds = action.bounds;
      return stateCopy;
    default:
      return state;
  }
};

export default filterReducer;