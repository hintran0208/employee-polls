import {
  addQuestion,
  ADD_NEW_QUESTION,
  receiveQuestions,
  RECEIVE_QUESTIONS,
  saveAnswerVote,
  SAVE_ANSWER_VOTE,
} from "./questions";

describe("addQuestion()", () => {
  it("should be created add new question action" + ADD_NEW_QUESTION, () => {
    const question = { question: "question" };
    const result = {
      type: ADD_NEW_QUESTION,
      question,
    };

    expect(addQuestion(question)).toEqual(result);
  });
});

describe("receiveQuestions()", () => {
  it("should be created receive question action" + RECEIVE_QUESTIONS, () => {
    const questions = {
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "sarahedo",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["sarahedo"],
          text: "Easy frontend",
        },
        optionTwo: {
          votes: [],
          text: "Easy backend",
        },
      },
    };
    const result = {
      type: RECEIVE_QUESTIONS,
      questions,
    };

    expect(receiveQuestions(questions)).toEqual(result);
  });
});

describe("saveAnswerVote()", () => {
  it("should be created save answer question action" + SAVE_ANSWER_VOTE, () => {
    const author = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const result = {
      type: SAVE_ANSWER_VOTE,
      author,
      qid,
      answer,
    };

    expect(saveAnswerVote(author, qid, answer)).toEqual(result);
  });
});
