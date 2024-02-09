import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Coffees = ({ getCoffees, allCoffees, setAllCoffees }) => {
  // console.log(getCoffees);

  const { _id, name, chef, price, photo } = getCoffees;

  const handleDelete = (idx, name) => {
    console.log(idx);
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // fetch part
        fetch(`https://coffee-store-server-tawny-two.vercel.app/delete/${idx}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = allCoffees.filter(
                (coffee) => coffee._id !== idx
              );
              setAllCoffees(remaining);
              swal(`${name} doc has been deleted!`, {
                icon: "success",
              });
            }
          });
        // fetch part end
      } else {
        swal(`${name} doc is safe!`);
      }
    });
  };

  return (
    <div className="card card-side bg-base-200 flex justify-center items-center px-3">
      <div>
        <figure>
          <img src={photo} alt={`photo of ${name} is missing!`} />
        </figure>
      </div>
      <div className="card-body">
        <h1>
          <span className="font-semibold">Name:</span> {name}
        </h1>
        <p>
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {price}
        </p>
      </div>
      <div className="join join-vertical gap-1">
        <Link to={`/details/${_id}`}>
          <button className="btn text-xl bg-[#d1b7a1] text-white">
            {" "}
            <FaEye />{" "}
          </button>
        </Link>
        <Link to={`/update-coffee/${_id}`}>
          <button className="btn text-xl bg-gray-800 text-white">
            {" "}
            <MdModeEdit />{" "}
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id, name)}
          className="btn text-xl bg-red-500 text-white"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

Coffees.propTypes = {
  getCoffees: PropTypes.object,
  allCoffees: PropTypes.array,
  setAllCoffees: PropTypes.func,
};

export default Coffees;
