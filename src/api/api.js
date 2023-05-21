import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

const fetchInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
      users,
      questions,
    }))
    .catch((error) => {
      console.log("Cannot fetch initial data: ", error);
    });
};

const saveQuestion = (optionOneText, optionTwoText, author) => {
  return _saveQuestion({ optionOneText, optionTwoText, author }).catch((error) => {
    console.log("Cannot save Question: ", error);
  });
};

const saveQuestionAnswer = (authedUserId, qid, answer) => {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid,
    answer,
  }).catch((error) => {
    console.log("Cannot save Answer: ", error);
  });
};

export { fetchInitialData, saveQuestion, saveQuestionAnswer };
