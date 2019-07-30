import { connect } from 'react-redux';
import { showBench } from '../actions/bench_actions';
import BenchShow from './bench_show';
import { selectReviews } from '../reducers/selectors';

const mapState = (state) => ({
  bench: state.entities.bench,
  reviews: selectReviews(state),
});

const mapDispatch = (dispatch) => ({
  showBench: (id) => dispatch(showBench(id)),
});

export default connect(mapState, mapDispatch)(BenchShow);
