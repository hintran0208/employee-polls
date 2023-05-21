import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Card = ({ question, author }) => {
  return (
    <Link to={`questions/${question.id}`}>
      <div className="m-5 p-4 mx-auto flex items-center space-x-4 bg-zinc-200 rounded-xl shadow-md transition ">
        <div className="shrink-0 ">
          <img className="rounded-full h-10 w-10 " src={author?.avatarURL} alt="Author" />
        </div>
        <div>
          <div className="font-large text-black">{question?.author}</div>
          <p className="italic text-xs ">{new Date(question?.timestamp).toDateString()}</p>
          <p className="text-xs underline underline-offset-4">Show</p>
        </div>
      </div>
    </Link>
  );
};

export default connect()(Card);
