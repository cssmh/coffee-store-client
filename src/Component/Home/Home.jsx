import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Coffees from "./Coffees";
import Icons from "./Icons";

const Home = () => {
  const loadCoffees = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Icons></Icons>
      <div className="my-7">
        <h1 className="text-2xl text-center font-semibold text-coffee">
          Our Popular Products
        </h1>
        <div className="flex justify-center my-3">
          <Link to={"/add-coffee"}>
            <button className="btn bg-coffee text-white">Add Coffee</button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto">
        {loadCoffees.map((coffee) => (
          <Coffees key={coffee._id} getCoffees={coffee}></Coffees>
        ))}
      </div>
    </div>
  );
};

export default Home;
