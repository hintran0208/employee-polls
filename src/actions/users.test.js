import {
  receiveUsers,
  RECEIVE_USERS,
  addNewQuestion,
  ADD_NEW_QUESTION_USER,
  addNewAnswer,
  ADD_NEW_ANSWER_USER,
} from "./users";

describe("receiveUsers(()", () => {
  it("create a new action " + RECEIVE_USERS, () => {
    const users = { users: "users" };
    const expectation = {
      type: RECEIVE_USERS,
      users,
    };

    expect(receiveUsers(users)).toEqual(expectation);
  });
});

describe("addNewQuestion()", () => {
  it("create a new action " + ADD_NEW_QUESTION_USER, () => {
    const id = "id";
    const author = "author";
    const expectation = {
      type: ADD_NEW_QUESTION_USER,
      author,
      id,
    };

    expect(addNewQuestion({ id, author })).toEqual(expectation);
  });
});

describe("addNewAnswer()", () => {
  it("create a new action " + ADD_NEW_ANSWER_USER, () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const expectation = {
      type: ADD_NEW_ANSWER_USER,
      authedUser,
      qid,
      answer,
    };

    expect(addNewAnswer(authedUser, qid, answer)).toEqual(expectation);
  });
});
