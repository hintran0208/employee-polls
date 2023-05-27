import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      User
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Answered Total
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Created Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr className="border-b dark:border-neutral-500" key={idx}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{user.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {Object.keys(user.answers).length}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4"> {user.questions.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
