import { UPDATE_BOUNDS, UPDATE_SEATING } from '../actions/filter_actions';
import merge from 'lodash/merge';

const initialState = {
  bounds: {},
  min_seating: 1,
  max_seating: 1000,
};

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  let stateCopy = merge({}, state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      stateCopy.bounds = action.bounds;
      return stateCopy;
    case UPDATE_SEATING:
      stateCopy.min_seating = action.min_seating;
      stateCopy.max_seating = action.max_seating;
      return stateCopy;
    default:
      return state;
  }
};

export default filterReducer;