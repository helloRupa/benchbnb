import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import { selectBenches, selectBounds } from '../reducers/selectors';
import { updateBounds } from '../actions/filter_actions';
import Search from './search';

const mapState = (state) => ({
  benches: selectBenches(state),
  bounds: selectBounds(state),
  benchesObj: state.entities.benches,
});

const mapDispatch = (dispatch) => ({
  fetchBenches: (filters) => dispatch(fetchBenches(filters)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
});

export default connect(mapState, mapDispatch)(Search);
