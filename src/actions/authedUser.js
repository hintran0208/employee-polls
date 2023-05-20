export const LOGOUT_AUTHENTICATED_USER = "LOGOUT_AUTHENTICATED_USER";
export const SET_AUTHENTICATED_USER = "SET_AUTHENTICATED_USER";

export function setAuthenticatedUser(authedUser) {
  return {
    type: SET_AUTHENTICATED_USER,
    authedUser,
  };
}

export function logoutAuthedUser() {
  return {
    type: LOGOUT_AUTHENTICATED_USER,
  };
}

export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();

    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );

    if (!!user) {
      return dispatch(setAuthenticatedUser(user));
    }
  };
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutAuthedUser());
  };
}
