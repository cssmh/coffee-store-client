import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Details = () => {
  const detailsForCoffee = useLoaderData();
  console.log(detailsForCoffee);
  const { name, chef, price, taste, category, details, photo } =
    detailsForCoffee;

  return (
    <div>
      <Link to={"/"}>
        <button className="mx-16 mt-4 font-bold flex items-center gap-1">
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
      <div className="flex justify-center items-center gap-12 mt-12 bg-base-300 py-12 max-w-[1240px] mx-auto">
        <div className="w-1/2">
          <img src={photo} className="ml-auto" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold text-coffee">{name}</h1>
          <p>
            {" "}
            <span className="font-semibold">Chef:</span>{" "}
            <span className="text-gray-500">{chef}</span>{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-gray-500">{price} taka</span>{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Taste:</span>{" "}
            <span className="text-gray-500">{taste}</span>{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Category:</span>{" "}
            <span className="text-gray-500">{category}</span>{" "}
          </p>
          <p className="w-4/5">
            {" "}
            <span className="font-semibold">Details:</span>{" "}
            <span className="text-gray-500">{details}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
