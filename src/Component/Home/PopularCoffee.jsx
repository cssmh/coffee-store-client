import { Link } from "react-router-dom";
import CoffeesCard from "./CoffeesCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularCoffee = () => {
  const [allCoffees, setAllCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(
          "https://coffee-store-server-tawny-two.vercel.app/coffees"
        );
        setAllCoffees(response.data);
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
    };

    fetchCoffees();
  }, []);

  return (
    <div>
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
        {allCoffees?.slice(0, 6).map((coffee) => (
          <CoffeesCard
            key={coffee._id}
            getCoffees={coffee}
            allCoffees={allCoffees}
            setAllCoffees={setAllCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCoffee;
