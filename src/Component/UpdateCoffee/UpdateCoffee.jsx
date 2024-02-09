import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BackHome from "../BackHome/BackHome";

const UpdateCoffee = () => {
  const updateCoffeeFromLoader = useLoaderData();
  //   console.log(updateCoffeeFromLoader);
  const { _id, name, chef, price, taste, category, details, photo } =
    updateCoffeeFromLoader;
  const navigateTo = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const formUpdatedData = {
      name,
      chef,
      price,
      taste,
      category,
      details,
      photo,
    };
    // console.log(formUpdatedData);

    fetch(`https://coffee-store-server-tawny-two.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formUpdatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Coffee Updated Successfully");
          navigateTo(-1);
        }
      });
  };

  return (
    <div>
      <BackHome></BackHome>
      <div className="md:mx-16 mt-4 px-5 md:px-16 py-10 bg-[#f2f0f0]">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Update Existing Coffee Details
        </h1>
        <form onSubmit={handleUpdate}>
          {/* Name & chef */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Coffee Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
          </div>
          {/* Price & taste */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
          </div>
          {/* Category & details */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
          </div>
          {/* photo */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input input-bordered text-gray-600"
                required
              />
            </div>
          </div>
          <button className="btn btn-block bg-[#d2aa89] text-coffee">
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
