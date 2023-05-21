const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";
const SAVE_ANSWER_VOTE = "SAVE_ANSWER_VOTE";
const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const saveAnswerVote = (author, qid, answer) => {
  return {
    type: SAVE_ANSWER_VOTE,
    author,
    qid,
    answer,
  };
};

const addQuestion = (question) => {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
};

export {
  ADD_NEW_QUESTION,
  RECEIVE_QUESTIONS,
  SAVE_ANSWER_VOTE,
  addQuestion,
  receiveQuestions,
  saveAnswerVote,
};
