import { connect } from "react-redux";
import PollCard from "./PollCard";

const HomePage = ({ authedUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div>
      <div className="mt-8 p-8 rounded-xl shadow-md transition bg-zinc-100">
        <h2 className="text-2xl font-bold mt-2 mb-4 text-center">New Questions</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.filter(unanswered).map((question) => (
            <li key={question.id}>
              <PollCard question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Answered Questions</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.filter(answered).map((question) => (
            <li key={question.id}>
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
