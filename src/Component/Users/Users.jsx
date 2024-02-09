import { useLoaderData } from "react-router-dom";
import BackHome from "../BackHome/BackHome";

const Users = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className="my-10">
        <BackHome></BackHome>
      <h1 className="text-xl text-center font-semibold mb-3">all Users</h1>
      <div className="overflow-x-auto mx-7 md:mx-16">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loaderData.map((data) => (
              <tr key={data._id}>
                <td>{data.email}</td>
                <td>{data.createdAt}</td>
                <td>Red</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
