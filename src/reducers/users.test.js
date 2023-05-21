import { ADD_NEW_QUESTION_USER, RECEIVE_USERS, ADD_NEW_ANSWER_USER } from "../actions/users";
import users from "./users";

describe("users", () => {
  it("should be return empty", () => {
    expect(users(undefined, {})).toEqual({});
  });

  it("should be create state with data", () => {
    const user = {
      userId: "id",
    };
    const expectation = {
      [user.userId]: { ...user },
    };
    const state = users(
      {},
      {
        type: RECEIVE_USERS,
        users: expectation,
      }
    );

    expect(state).toEqual(expectation);
  });

  it("should be return state with question added to user", () => {
    const id = "question_id";
    const user = {
      id: "user_id",
      questions: [],
    };
    const expectation = {
      [user.id]: {
        ...user,
        questions: [id].concat(user.questions),
      },
    };
    const state = users(
      {
        [user.id]: { ...user },
      },
      { type: ADD_NEW_QUESTION_USER, author: user.id, id }
    );

    expect(state).toEqual(expectation);
  });

  it("should be return state with the user's voted question", () => {
    const authedUser = "user_id";
    const qid = "question_id";
    const answer = "answer_id";
    const user = {
      id: "user_id",
      answers: {},
    };
    const expectation = {
      [user.id]: {
        ...user,
        answers: {
          ...user.answers,
          [qid]: answer,
        },
      },
    };
    const state = users(
      {
        [user.id]: { ...user },
      },
      {
        type: ADD_NEW_ANSWER_USER,
        authedUser,
        qid,
        answer,
      }
    );

    expect(state).toEqual(expectation);
  });
});
