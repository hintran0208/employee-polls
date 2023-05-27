import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddVote } from "../actions/shared";

const PollPage = ({ dispatch, authedUser, question, createdUser }) => {
  const navigate = useNavigate();

  const isFirstVoted = question.optionOne.votes.indexOf(authedUser.id) !== -1;
  const isSecondVoted = question.optionTwo.votes.indexOf(authedUser.id) !== -1;
  const isVoted = isFirstVoted || isSecondVoted;

  const handleFirstVoted = (e) => {
    try {
      e.preventDefault();
      dispatch(handleAddVote(question.id, "optionOne"));
      navigate("/");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSecondVoted = (e) => {
    try {
      e.preventDefault();
      dispatch(handleAddVote(question.id, "optionTwo"));
      navigate("/");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const firstVote = question.optionOne.votes.length;
  const secondVote = question.optionTwo.votes.length;
  const total = firstVote + secondVote;
  const firstVotePercentage = Math.round(100 * (firstVote / total)) + " %";
  const secondVotePercentage = Math.round(100 * (secondVote / total)) + " %";

  return (
    <div>
      <h1 className="mt-12 text-center text-xl font-bold ">Created by {createdUser?.id}</h1>

      <div className="flex justify-center mt-10">
        <img src={createdUser?.avatarURL} alt="Profile" className="h-24 w-24 rounded-full" />
      </div>

      <div className="flex justify-center">
        <h2 className="mt-6 mb-10 text-4xl font-bold ">What is your answer?</h2>
      </div>

      <div className="gap-4 mt-4 grid grid-cols-2 ">
        <button
          onClick={handleFirstVoted}
          disabled={isVoted}
          className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="font-normal text-gray-700 dark:text-gray-400">
            {question.optionOne.text}
            {isVoted && (
              <p className="text-xs">
                Votes: {question.optionOne.votes.length} ({firstVotePercentage})
              </p>
            )}
          </div>
        </button>

        <button
          onClick={handleSecondVoted}
          disabled={isVoted}
          className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="font-normal text-gray-700 dark:text-gray-400">
            {question.optionTwo.text}
            {isVoted && (
              <p className="text-xs">
                Votes: {question.optionTwo.votes.length} ({secondVotePercentage})
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find((question) => question.id === useParams().id);
    const createdUser = Object.values(users).find((user) => user.id === question.author);
    return { authedUser, question, createdUser };
  } catch (error) {
    console.log("Error", error);
  }
};

export default connect(mapStateToProps)(PollPage);
