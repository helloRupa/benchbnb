import { connect } from 'react-redux';
import { fetchBenches, showBench } from '../actions/bench_actions';
import { selectBenches, selectBounds } from '../reducers/selectors';
import BenchIndex from './bench_index';

const mapState = (state) => ({
  benches: selectBenches(state),
  bounds: selectBounds(state),
});

const mapDispatch = (dispatch) => ({
  fetchBenches: (filters) => dispatch(fetchBenches(filters)),
  showBench: (id) => dispatch(showBench(id)),
});

export default connect(mapState, mapDispatch)(BenchIndex);
