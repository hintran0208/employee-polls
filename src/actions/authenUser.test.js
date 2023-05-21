import { setAuthenticatedUser, SET_AUTHENTICATED_USER } from "./authenUser";

describe("setAuthenticatedUser", () => {
  it("create a new action" + SET_AUTHENTICATED_USER, () => {
    const userId = "user_id";
    const expectation = {
      type: SET_AUTHENTICATED_USER,
      userId,
    };

    expect(setAuthenticatedUser(userId)).toEqual(expectation);
  });
});
