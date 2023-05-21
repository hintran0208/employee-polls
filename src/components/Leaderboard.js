import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div>
      <table className="w-full text-sm mt-12 border-collapse table-auto ">
        <thead className="table-header-group">
          <tr className="table-row">
            <th className="text-slate-400 dark:text-slate-200 text-left border-b dark:border-slate-600 font-medium p-5 pl-10    ">
              User
            </th>
            <th className="text-slate-400 dark:text-slate-200 text-left border-b dark:border-slate-600 font-medium p-5 pl-10    ">
              Answered Total
            </th>
            <th className="text-slate-400 dark:text-slate-200 text-left border-b dark:border-slate-600 font-medium p-5 pl-10   ">
              Created Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 p-5 pl-10 ">
                <span className="font-bold">{user.name}</span>
              </td>
              <td className="text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 p-5 pl-10">
                {Object.keys(user.answers).length}
              </td>
              <td className="text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 p-5 pl-10 ">
                {user.questions.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
