import { LOGOUT_AUTHENTICATED_USER, SET_AUTHENTICATED_USER } from "../actions/authenUser";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return action.userId;
    case LOGOUT_AUTHENTICATED_USER:
      return null;
    default:
      return state;
  }
};

export default authedUser;
