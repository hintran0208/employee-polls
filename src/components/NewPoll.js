import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddNewQuestion } from "../actions/shared";

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();

  const [firstVote, setFirstVote] = useState("");
  const [secondVote, setSecondVote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddNewQuestion(firstVote, secondVote));
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9 text-center">Add New Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="firstVote" className="font-medium text-slate-700 block text-sm ">
            First Option
          </label>
          <div className="mt-2">
            <input
              value={firstVote}
              onChange={(e) => setFirstVote(e.target.value)}
              type="text"
              name="firstVote"
              id="firstVote"
              className="px-4 py-3 border-slate-300 placeholder-slate-400  disabled:bg-slate-50 bg-white border shadow-sm  disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="secondVote" className="font-medium text-slate-700 block text-sm ">
            Second Option
          </label>
          <div className="mt-1">
            <input
              value={secondVote}
              onChange={(e) => setSecondVote(e.target.value)}
              type="text"
              name="secondVote"
              id="secondVote"
              className="px-4 py-3 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 bg-white border shadow-sm border-slate-300  focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            type="submit"
            className="w-full text-white bg-sky-500 rounded-md font-semibold hover:bg-sky-700 px-5 py-2.5 text-sm leading-5  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
