import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_BENCH_ERRORS = 'RECEIVE_BENCH_ERRORS';
export const RECEIVE_SINGLE_BENCH = 'RECEIVE_SINGLE_BENCH';

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BENCH_ERRORS,
  errors
});

export const receiveSingleBench = (bench) => ({
  type: RECEIVE_SINGLE_BENCH,
  bench
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
      (bench) => dispatch(receiveBench(bench)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const showBench = (id) => (dispatch) => {
  return APIUtil.showBench(id)
    .then(
      (bench) => {
        dispatch(receiveSingleBench(bench));
        return bench;
      },
      (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
        $.Deferred().reject(errors);
      }
    );
};
