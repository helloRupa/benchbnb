// import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_SEATING = 'UPDATE_SEATING';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateSeating = (seating) => ({
  type: UPDATE_SEATING,
  min_seating: seating.min_seating,
  max_seating: seating.max_seating
});

// export const updateBounds = (bounds, filters) => (dispatch) => {
//   dispatch(uBounds(bounds));
//   return fetchBenches(filters)(dispatch);
  
// };
