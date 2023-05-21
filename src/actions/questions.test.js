import {
  addQuestion,
  ADD_NEW_QUESTION,
  receiveQuestions,
  RECEIVE_QUESTIONS,
  saveAnswerVote,
  SAVE_ANSWER_VOTE,
} from "./questions";

describe("addQuestion()", () => {
  it("create a new action " + ADD_NEW_QUESTION, () => {
    const question = { question: "question" };
    const expectation = {
      type: ADD_NEW_QUESTION,
      question,
    };

    expect(addQuestion(question)).toEqual(expectation);
  });
});

describe("receiveQuestions()", () => {
  it("create a new action " + RECEIVE_QUESTIONS, () => {
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
    const expectation = {
      type: RECEIVE_QUESTIONS,
      questions,
    };

    expect(receiveQuestions(questions)).toEqual(expectation);
  });
});

describe("saveAnswerVote()", () => {
  it("create a new action " + SAVE_ANSWER_VOTE, () => {
    const author = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const expectation = {
      type: SAVE_ANSWER_VOTE,
      author,
      qid,
      answer,
    };

    expect(saveAnswerVote(author, qid, answer)).toEqual(expectation);
  });
});
