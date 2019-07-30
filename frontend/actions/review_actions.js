import * as APIUtil from '../util/review_api_util';

export const ADD_REVIEW = 'ADD_REVIEW';

export const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

export const createReview = (review) => (dispatch) => {
  return APIUtil.createReview(review)
    .then(
      (res) => dispatch(addReview(res)),
      (err) => dispatch(err.responseJSON)
    );
};
