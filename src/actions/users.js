export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_NEW_ANSWER_USER = "ADD_NEW_ANSWER_USER";
export const ADD_NEW_QUESTION_USER = "ADD_NEW_QUESTION_USER";

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function addNewAnswer(authedUser, qid, answer) {
  return {
    type: ADD_NEW_ANSWER_USER,
    authedUser,
    qid,
    answer,
  };
}

function addNewQuestion({ author, id }) {
  return {
    type: ADD_NEW_QUESTION_USER,
    author,
    id,
  };
}

export { addNewQuestion, addNewAnswer, receiveUsers };
