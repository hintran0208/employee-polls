import { SAVE_ANSWER_VOTE, ADD_NEW_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_ANSWER_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes, action.author],
          },
        },
      };

    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    default:
      return state;
  }
}

export default questions;
