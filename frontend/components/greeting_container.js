import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';
import { selectCurrentUser } from '../reducers/selectors';

const mapState = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Greeting);
