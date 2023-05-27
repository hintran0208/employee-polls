import { setAuthenticatedUser, SET_AUTHENTICATED_USER } from "./authenUser";

describe("setAuthenticatedUser", () => {
  it("should be created set authenticated user action" + SET_AUTHENTICATED_USER, () => {
    const userId = "user_id";
    const result = {
      type: SET_AUTHENTICATED_USER,
      userId,
    };

    expect(setAuthenticatedUser(userId)).toEqual(result);
  });
});
