import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        return user;
      },
      (errors) => {
        dispatch(receiveErrors(errors));
      }
    );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(
      (res) => {
        dispatch(logoutCurrentUser(res));
        return res;
      },
      (errors) => {
        dispatch(receiveErrors(errors));
      }
    );
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        return user;
      },
      (errors) => {
        dispatch(receiveErrors(errors));
      }
    );
};
