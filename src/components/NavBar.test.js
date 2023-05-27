import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import NavBar from "./NavBar";

describe("App", () => {
  it("should render the app", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();

    const homePageLink = screen.getByText(/Home/i);
    expect(homePageLink).toBeInTheDocument();
  });
});
