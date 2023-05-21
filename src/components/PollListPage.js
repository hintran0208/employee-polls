import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddVote } from "../actions/shared";

const PollPage = ({ dispatch, authedUser, question, createdUser }) => {
  const navigate = useNavigate();

  const isFirstVoted = question.optionOne.votes.includes(authedUser.id);
  const isSecondVoted = question.optionTwo.votes.includes(authedUser.id);
  const isVoted = isFirstVoted || isSecondVoted;

  const handleFirstVoted = (e) => {
    e.preventDefault();
    dispatch(handleAddVote(question.id, "optionOne"));
    navigate("/");
  };

  const handleSecondVoted = (e) => {
    e.preventDefault();
    dispatch(handleAddVote(question.id, "optionTwo"));
    navigate("/");
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
        <h2 className="mt-6 mb-10 text-2xl font-bold ">What is your answer?</h2>
      </div>

      <div className="gap-4 mt-4 grid grid-cols-2 ">
        <button
          onClick={handleFirstVoted}
          disabled={isVoted}
          className={
            "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
            (isFirstVoted ? "bg-lime-400" : "")
          }
        >
          <div className={isFirstVoted ? "chosen" : ""}>
            <p className="font-bold mb-2">{question.optionOne.text}</p>
            {!isVoted && <p className="underline-offset-4 mb-3  ">Choose</p>}
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
          className={
            "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
            (isSecondVoted ? "bg-lime-400" : "")
          }
        >
          <p className="font-bold mb-2">{question.optionTwo.text}</p>
          {!isVoted && <p className="underline-offset-4 mb-3  ">Choose</p>}
          {isVoted && (
            <p className="text-xs">
              Votes: {question.optionTwo.votes.length} ({secondVotePercentage})
            </p>
          )}
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
