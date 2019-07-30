import { connect } from 'react-redux';
import BenchShow from './bench_show';

const mapState = (state) => ({
  bench: state.entities.bench,
});

export default connect(mapState)(BenchShow);
