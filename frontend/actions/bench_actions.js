import * as APIUtil from '../util/bench_api_util';
import { loading, doneLoading } from './loading_actions';

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

export const fetchBenches = (filters, shouldLoad = true) => (dispatch) => {
  if (shouldLoad) {
    dispatch(loading);
  }

  return APIUtil.fetchBenches(filters)
    .then(
      (benches) => dispatch(receiveBenches(benches.benches)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
    .always(() => dispatch(doneLoading));
};

export const createBench = (bench) => (dispatch) => {
  dispatch(loading);

  return APIUtil.createBench(bench)
    .then(
      (bench) => { 
        dispatch(receiveBench(bench));
        return bench;
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
    .always(() => dispatch(doneLoading));
};

export const showBench = (id) => (dispatch) => {
  dispatch(loading);

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
    )
    .always(() => dispatch(doneLoading));
};
