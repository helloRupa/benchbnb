import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench } from '../actions/bench_actions';

const mapState = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
});

const mapDispatch = (dispatch) => ({
  createBench: (bench) => dispatch(createBench(bench)),
});

export default connect(mapState, mapDispatch)(BenchForm);
