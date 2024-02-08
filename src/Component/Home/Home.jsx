import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Coffees from "./Coffees";
import { useState } from "react";
import Services from "./Services";
import Instagram from "./Instagram";

const Home = () => {
  const loadCoffees = useLoaderData();
  const [allCoffees, setAllCoffees] = useState(loadCoffees);

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
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
        {allCoffees.map((coffee) => (
          <Coffees
            key={coffee._id}
            getCoffees={coffee}
            // send state to coffees component using prop
            allCoffees={allCoffees}
            setAllCoffees={setAllCoffees}
            // send state to coffees component using prop end
          ></Coffees>
        ))}
      </div>
      <Instagram></Instagram>
    </div>
  );
};

export default Home;
