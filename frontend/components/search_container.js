import { connect } from 'react-redux';
import { fetchBenches, showBench } from '../actions/bench_actions';
import { selectBenches } from '../reducers/selectors';
import { updateBounds, updateSeating } from '../actions/filter_actions';
import Search from './search';

const mapState = (state) => ({
  benches: selectBenches(state),
  benchesObj: state.entities.benches,
  filters: state.ui.filters,
});

const mapDispatch = (dispatch) => ({
  fetchBenches: (filters) => dispatch(fetchBenches(filters)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  updateSeating: (seating) => dispatch(updateSeating(seating)),
  showBench: (id) => dispatch(showBench(id)),
});

export default connect(mapState, mapDispatch)(Search);
