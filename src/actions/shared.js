import { receiveUsers } from "./users";
import { receiveQuestions, saveAnswerVote, addQuestion } from "./questions";
import { fetchInitialData } from "../api/api";
import { saveQuestion, saveQuestionAnswer } from "../api/api";
import { addNewAnswer, addNewQuestion } from "./users";

function handleInitialData() {
  return (dispatch) => {
    return fetchInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      })
      .catch((error) => {
        console.log("Cannot handle init data", error);
      });
  };
}

function handleAddVote(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer(authedUser.id, questionId, answer)
      .then(() => {
        dispatch(addNewAnswer(authedUser.id, questionId, answer));
        dispatch(saveAnswerVote(authedUser.id, questionId, answer));
      })
      .catch((error) => {
        console.log("Cannot handle add data", error);
      });
  };
}

function handleAddNewQuestion(firstVote, secondVote) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion(firstVote, secondVote, authedUser)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addNewQuestion(question));
      })
      .catch((error) => {
        console.log("Cannot handle add data", error);
      });
  };
}

export { handleInitialData, handleAddVote, handleAddNewQuestion };
