import { connect } from 'react-redux';
import SessionForm from './session_form';
import { selectErrors } from '../reducers/selectors';
import { login } from '../actions/session_actions';

const mapState = (state) => ({
  errors: selectErrors(state),
  formType: 'login',
});

const mapDispatch = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapState, mapDispatch)(SessionForm);
