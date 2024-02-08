import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import swal from "sweetalert";

const AddCoffee = () => {
  const handleFormAddButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const formData = { name, chef, price, taste, category, details, photo };
    // console.log(formData);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            swal("Good job!", "Coffee Added", "success");
            form.reset()
        }
      });
  };

  return (
    <div>
      <Link to={"/"}>
        <button className="mx-16 mt-4 font-bold flex items-center gap-1">
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
      <div className="mx-16 mt-4 px-16 py-10 bg-[#f2f0f0]">
        <form onSubmit={handleFormAddButton}>
          {/* Name & chef */}
          <div className="flex justify-between gap-4 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Coffee Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter Coffee Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Chef</span>
              </label>
              <input
                type="text"
                required
                name="chef"
                placeholder="Enter Coffee Chef"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* Price & taste */}
          <div className="flex justify-between gap-4 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                required
                name="price"
                placeholder="Enter Coffee Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Taste</span>
              </label>
              <input
                type="text"
                required
                name="taste"
                placeholder="Enter Coffee Taste"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* Category & details */}
          <div className="flex justify-between gap-4 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input
                type="text"
                required
                name="category"
                placeholder="Enter Coffee Category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Details</span>
              </label>
              <input
                type="text"
                required
                name="details"
                placeholder="Enter Coffee Details"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* photo */}
          <div className="flex justify-between gap-4 mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Photo</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Enter Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <button className="btn btn-block bg-[#d2aa89] text-coffee">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
