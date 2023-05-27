import { configureStore } from "@reduxjs/toolkit";
import authedUser from "./reducers/authedUser";
import questions from "./reducers/questions";
import users from "./reducers/users";

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions,
  },
});
