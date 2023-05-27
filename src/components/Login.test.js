import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import { handleInitialData } from "../actions/shared";

describe("Login", () => {
  it("should reset input value after submitted", async () => {
    await store.dispatch(handleInitialData());

    const utils = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const userNameEl = screen.getByTestId("username");
    const passWordEl = screen.getByTestId("password");
    const submitEl = screen.getByTestId("submit");

    fireEvent.change(userNameEl, { target: { value: "incorrectUsername" } });
    fireEvent.change(passWordEl, { target: { value: "incorrectPassword" } });

    expect(userNameEl.value).toBe("incorrectUsername");
    expect(passWordEl.value).toBe("incorrectPassword");

    fireEvent.click(submitEl);

    expect(userNameEl.value).toBe("");
    expect(passWordEl.value).toBe("");
  });
});
