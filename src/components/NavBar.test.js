import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import { setAuthenticatedUser } from "../actions/authedUser";

describe("NavBar", () => {
  it("should display username of logged in user", () => {
    store.dispatch(setAuthenticatedUser({ id: "sarahedo", password: "" }));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    const userSpanElement = component.getByTestId("user-information");
    expect(userSpanElement.textContent).toBe("Hello: sarahedo");
  });
});
