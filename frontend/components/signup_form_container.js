import { connect } from 'react-redux';
import SessionForm from './session_form';
import { selectErrors } from '../reducers/selectors';
import { signup } from '../actions/session_actions';

const mapState = (state) => ({
  errors: selectErrors(state),
  formType: 'signup',
});

const mapDispatch = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(mapState, mapDispatch)(SessionForm);
