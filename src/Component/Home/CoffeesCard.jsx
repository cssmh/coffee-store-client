import { FaEye } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios"; // Import axios

const CoffeesCard = ({ getCoffees, allCoffees, setAllCoffees }) => {
  const { _id, name, chef, price, photo } = getCoffees;

  const handleDelete = async (idx, name) => {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            `http://localhost:5000/delete/${idx}`
          );

          if (response.data.deletedCount > 0) {
            const remaining = allCoffees.filter((coffee) => coffee._id !== idx);
            setAllCoffees(remaining); // Update the state with remaining items
            swal(`${name} has been deleted!`, {
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting coffee:", error);
          swal("Something went wrong. Please try again!", {
            icon: "error",
          });
        }
      } else {
        swal(`${name} is safe!`);
      }
    });
  };

  return (
    <div className="card lg:card-side bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row items-center lg:items-start gap-5 p-5 transition-transform hover:scale-105">
      <figure className="w-full lg:w-1/3 flex-shrink-0">
        <img
          src={photo}
          alt={`photo of ${name}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-coffee mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Price:</span> ${price}
        </p>
      </div>
      <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3">
        <Link to={`/details/${_id}`}>
          <button className="btn bg-[#d1b7a1] text-white flex items-center justify-center p-3 rounded-lg hover:bg-[#b08b7a] transition duration-300">
            <FaEye className="text-xl" />
          </button>
        </Link>
        <Link to={`/update-coffee/${_id}`}>
          <button className="btn bg-gray-800 text-white flex items-center justify-center p-3 rounded-lg hover:bg-gray-700 transition duration-300">
            <MdModeEdit className="text-xl" />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id, name)}
          className="btn bg-red-500 text-white flex items-center justify-center p-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CoffeesCard;
