import { connect } from 'react-redux';
import Loading from './loading';

const mapState = (state) => ({
  loading: state.ui.loading,
});

export default connect(mapState)(Loading);
