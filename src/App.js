import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import Error404 from "./components/404";
import HomePage from "./components/HomePage";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import NewPoll from "./components/NewPoll";
import PollListPage from "./components/PollListPage";

const App = ({ authorizedUser, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <NavBar />
      <div className="container mx-auto py-6">
        <Routes>
          {authorizedUser ? (
            <Fragment>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/new" element={<NewPoll />} />
              <Route path="/questions/:id" element={<PollListPage />} />
              <Route path="/404" element={<Error404 />} />
            </Fragment>
          ) : (
            <Fragment>
              <Route path="*" element={<Login />} />
            </Fragment>
          )}
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authorizedUser: authedUser !== null,
});

export default connect(mapStateToProps)(App);
