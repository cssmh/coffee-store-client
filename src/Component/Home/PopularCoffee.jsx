import { Link } from "react-router-dom";
import CoffeesCard from "./CoffeesCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularCoffee = () => {
  const [allCoffees, setAllCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://coffee-store-server-tawny-two.vercel.app/coffees"
        );
        setAllCoffees(response.data);
      } catch (error) {
        console.error("Error fetching coffees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-amber-300/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <span className="text-amber-600 text-xl">☕</span>
            <span className="text-amber-800 font-medium text-sm">
              Featured Collection
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent mb-4">
            Our Popular Products
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our most loved coffee blends, carefully selected and
            roasted to perfection for the ultimate coffee experience
          </p>

          <Link to="/add-coffee">
            <button className="group bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0">
              <span className="flex items-center gap-3">
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                  ☕
                </span>
                Add New Coffee
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>
          </Link>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Loading...</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Coffee Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {allCoffees?.slice(0, 6).map((coffee, index) => (
              <div
                key={coffee._id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CoffeesCard
                  getCoffees={coffee}
                  allCoffees={allCoffees}
                  setAllCoffees={setAllCoffees}
                />
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        {!loading && allCoffees.length > 6 && (
          <div className="text-center mt-12">
            <Link to="/products">
              <button className="btn btn-outline border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105">
                View All Coffee Collection
              </button>
            </Link>
          </div>
        )}

        {/* Empty State */}
        {!loading && allCoffees.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Coffee Found
            </h3>
            <p className="text-gray-500 mb-6">
              Start by adding some delicious coffee to your collection
            </p>
            <Link to="/add-coffee">
              <button className="btn bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-2xl">
                Add Your First Coffee
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCoffee;
