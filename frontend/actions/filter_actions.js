// import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

// export const updateBounds = (bounds, filters) => (dispatch) => {
//   dispatch(uBounds(bounds));
//   return fetchBenches(filters)(dispatch);
  
// };
