import { ADD_NEW_ANSWER_USER, ADD_NEW_QUESTION_USER, RECEIVE_USERS } from "../actions/users";

function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_NEW_ANSWER_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_NEW_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [action.id].concat(state[action.author].questions),
        },
      };
    default:
      return state;
  }
}

export default users;
