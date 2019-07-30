import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../actions/review_actions';
import { selectBenchErrors } from '../reducers/selectors';

const mapState = (state) => ({
  loggedIn: Boolean(state.session.id),
  errors: selectBenchErrors(state),
});

const mapDispatch = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
});

export default connect(mapState, mapDispatch)(ReviewForm);
