import { useState } from "react";
import { connect } from "react-redux";
import { setAuthenticatedUser } from "../actions/authenUser";

const Login = ({ dispatch, authorizedUser }) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-auto"
          src="https://t3.ftcdn.net/jpg/02/90/83/56/360_F_290835671_jFAkOJOyejt4uZ0b7NvZtoNlD92L7cHh.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                data-testid="username"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                data-testid="password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              data-testid="submit"
            >
              Sign in
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
