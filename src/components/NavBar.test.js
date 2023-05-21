import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import store from "../store";

describe("NavBar", () => {
  test("should be rendered the page correctly", async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    const homePageLink = screen.getByText(/home/i);
    const newPollLink = screen.getByText(/new/i);
    const leaderboardLink = screen.getByText(/leaderboard/i);

    expect(homePageLink).toBeInTheDocument();
    expect(newPollLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
  });
});
