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
            `https://coffee-store-server-tawny-two.vercel.app/delete/${idx}`
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
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-amber-100/50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6">
        {/* Image section */}
        <div className="relative w-full lg:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-4">
            <img
              src={photo}
              alt={`photo of ${name}`}
              className="w-full h-48 lg:h-32 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
            />
            {/* Price tag */}
            <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              ${price}
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl lg:text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
            {name}
          </h2>
          <div className="space-y-2 mb-4">
            <p className="text-gray-600 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="font-semibold text-amber-700">Chef:</span>
              <span>{chef}</span>
            </p>
          </div>

          {/* Rating stars (mock) */}
          <div className="flex justify-center lg:justify-start gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-sm">
                ★
              </span>
            ))}
            <span className="text-gray-500 text-sm ml-2">(4.8)</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex lg:flex-col gap-3 lg:gap-2">
          <Link to={`/details/${_id}`}>
            <button
              className="group/btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              title="View Details"
            >
              <FaEye className="text-lg group-hover/btn:scale-110 transition-transform duration-300" />
            </button>
          </Link>
          <Link to={`/update-coffee/${_id}`}>
            <button
              className="group/btn bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              title="Edit Coffee"
            >
              <MdModeEdit className="text-lg group-hover/btn:scale-110 transition-transform duration-300" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id, name)}
            className="group/btn bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            title="Delete Coffee"
          >
            <MdDelete className="text-lg group-hover/btn:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-300/50 transition-all duration-500"></div>
    </div>
  );
};

export default CoffeesCard;
