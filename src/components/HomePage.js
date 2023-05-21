import PollCard from "./PollCard";
import { connect } from "react-redux";

const HomePage = ({ authedUser, questions, users }) => {
  function answeredQuestions(question) {
    return (
      question.optionOne.votes.includes(authedUser.id) ||
      question.optionTwo.votes.includes(authedUser.id)
    );
  }

  function unansweredQuestions(question) {
    return (
      !question.optionOne.votes.includes(authedUser.id) &&
      !question.optionTwo.votes.includes(authedUser.id)
    );
  }

  return (
    <div>
      <div className="mt-8 p-8 rounded-xl shadow-md transition bg-zinc-100">
        <h2 className="mt-2 mb-4 text-2xl  text-center font-bold ">Newest Questions</h2>
        <ul className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
          {questions.filter(unansweredQuestions).map((question) => (
            <li key={question.id}>
              <PollCard question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 p-8 rounded-xl shadow-md transition bg-zinc-100">
        <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Answered Questions</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.filter(answeredQuestions).map((question) => (
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
