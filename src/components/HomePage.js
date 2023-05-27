import PollCard from "./PollCard";
import { connect } from "react-redux";

const HomePage = ({ authedUser, questions, users }) => {
  function answeredQuestions(question) {
    const { optionOne, optionTwo } = question;
    const userVotes = optionOne.votes.concat(optionTwo.votes);
    return userVotes.includes(authedUser.id);
  }

  function unansweredQuestions(question) {
    const { optionOne, optionTwo } = question;
    const userVotes = optionOne.votes.concat(optionTwo.votes);
    return !userVotes.includes(authedUser.id);
  }

  return (
    <div>
      <div className="mt-8 p-8 rounded-xl shadow-md transition bg-zinc-100">
        <h2 className="mt-2 mb-4 text-4xl text-center font-bold">Newest Questions</h2>
        <ul className="grid grid-cols-2 gap-8 ">
          {questions.filter(unansweredQuestions).map((question, idx) => (
            <li key={idx}>
              <PollCard question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 p-8 ">
        <h2 className="mb-8 text-4xl text-center font-bold">Answered Questions</h2>
        <ul className="grid grid-cols-2 gap-8">
          {questions.filter(answeredQuestions).map((question, idx) => (
            <li key={idx}>
              <PollCard question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(HomePage);
