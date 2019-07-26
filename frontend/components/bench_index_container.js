import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import { selectBenches, selectBounds } from '../reducers/selectors';
import BenchIndex from './bench_index';

const mapState = (state) => ({
  benches: selectBenches(state),
  bounds: selectBounds(state),
});

const mapDispatch = (dispatch) => ({
  fetchBenches: (filters) => dispatch(fetchBenches(filters)),
});

export default connect(mapState, mapDispatch)(BenchIndex);
