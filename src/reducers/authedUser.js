import { LOGOUT_AUTHENTICATED_USER, SET_AUTHENTICATED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return action.authedUser;
    case LOGOUT_AUTHENTICATED_USER:
      return null;
    default:
      return state;
  }
}
