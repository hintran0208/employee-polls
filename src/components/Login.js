import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuthenticatedUser } from "../actions/authenUser";

const Login = ({ dispatch, authorizedUser }) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

  if (authorizedUser) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleUserLogin = (username, password) => {
    return (dispatch, getState) => {
      const { users } = getState();

      const loginUser = Object.values(users).find(
        (user) => user.id === username && user.password === password
      );

      if (!!loginUser) {
        return dispatch(setAuthenticatedUser(loginUser));
      }
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleUserLogin(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center">
      <img
        src="https://t3.ftcdn.net/jpg/02/90/83/56/360_F_290835671_jFAkOJOyejt4uZ0b7NvZtoNlD92L7cHh.jpg"
        alt="avatar"
      />

      <div className="flex flex-col mx-8 justify-center items-center">
        <h1 className="text-3xl font-bold mt-9 mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-700">
              Username
            </label>
            <div className="mt-1">
              <input
                className="px-4 py-4 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500  bg-white border shadow-sm border-slate-300  disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                value={username}
                onChange={handleUsernameChange}
                type="text"
                name="username"
                id="username"
                data-testid="username"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="font-medium text-slate-700 block text-sm ">
              Password
            </label>
            <div className="mt-1">
              <input
                className="px-4 py-4 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none bg-white border shadow-sm border-slate-300 "
                value={password}
                onChange={handlePasswordChange}
                type="password"
                name="password"
                id="password"
                data-testid="password"
              />
            </div>
          </div>
          <div className="mt-6 text-right">
            <button
              className="px-20 py-2 bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authorizedUser: authedUser !== null,
});

export default connect(mapStateToProps)(Login);
