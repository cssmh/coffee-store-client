import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Products = () => {
  const [allCoffees, setAllCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/coffees");
        setAllCoffees(response.data);
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
    };

    fetchCoffees();
  }, []);

  const handleAddToCart = async (coffeeId) => {
    try {
      const cartItem = {
        coffeeId: coffeeId,
        quantity: 1,
      };
      await axios.post("http://localhost:5000/cart", cartItem);
      toast.success("Coffee added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add coffee to cart");
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1230px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCoffees.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Chef:</strong> {product.chef}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Taste:</strong> {product.taste}
                </p>
                <p className="text-lg font-bold text-coffee mb-4">
                  Price: {product.price} BDT
                </p>
                <button
                  onClick={() => handleAddToCart(product._id)} // Call handleAddToCart on button click
                  className="bg-coffee text-white px-4 py-2 rounded hover:bg-coffee-dark transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
