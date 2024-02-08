import PropTypes from "prop-types";
import Swal from "sweetalert2";
const Coffees = ({ getCoffees }) => {
  // console.log(getCoffees);

  const { _id, name, chef, price, photo } = getCoffees;

  const handleDelete = (idx, name) => {
    console.log(idx);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch part
        fetch(`http://localhost:5000/delete/${idx}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${name} has been deleted.`,
                icon: "success",
              });
            }
          });
        // fetch part end
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
        <button className="btn">Details</button>
        <button className="btn">Edit</button>
        <button onClick={() => handleDelete(_id, name)} className="btn">
          X
        </button>
      </div>
    </div>
  );
};

Coffees.propTypes = {
  getCoffees: PropTypes.object,
};

export default Coffees;
