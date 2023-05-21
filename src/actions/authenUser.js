const LOGOUT_AUTHENTICATED_USER = "LOGOUT_AUTHENTICATED_USER";
const SET_AUTHENTICATED_USER = "SET_AUTHENTICATED_USER";

function setAuthenticatedUser(userId) {
  return {
    type: SET_AUTHENTICATED_USER,
    userId,
  };
}

function logoutAuthenticatedUser() {
  return {
    type: LOGOUT_AUTHENTICATED_USER,
  };
}

export {
  LOGOUT_AUTHENTICATED_USER,
  SET_AUTHENTICATED_USER,
  setAuthenticatedUser,
  logoutAuthenticatedUser,
};
