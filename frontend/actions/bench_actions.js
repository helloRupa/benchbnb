import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_BENCH_ERRORS = 'RECEIVE_BENCH_ERRORS';

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const recieveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BENCH_ERRORS,
  errors
});

export const fetchBenches = (filters) => (dispatch) => {
  return APIUtil.fetchBenches(filters)
    .then(
      (benches) => dispatch(receiveBenches(benches.benches)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const createBench = (bench) => (dispatch) => {
  return APIUtil.createBench(bench)
    .then(
      (bench) => dispatch(recieveBench(bench)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
};
