import { useLoaderData } from "react-router-dom";
import BackHome from "../BackHome/BackHome";
import swal from "sweetalert";
import { useState } from "react";

const Users = () => {
  const loaderData = useLoaderData();
  const [users, setUsers] = useState(loaderData);
  // console.log(loaderData);

  const handleDelete = (idx) => {
    // console.log(idx);
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // delete from database
        fetch(`https://coffee-store-server-tawny-two.vercel.app/user/delete/${idx}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const filterRemaining = users.filter((user) => user._id !== idx);
              setUsers(filterRemaining);
              swal("User has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("User file is safe!");
      }
    });
  };

  return (
    <div className="my-10">
      <BackHome></BackHome>
      <h1 className="text-xl text-center font-semibold mb-3">
        all Users: {users.length}
      </h1>
      <div className="overflow-x-auto mx-7 md:mx-16">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => (
              <tr key={data._id}>
                <td>{data.email}</td>
                <td>{data.createdAt}</td>
                <td>{data?.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
