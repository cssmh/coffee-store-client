import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [newCoffee, setNewCoffee] = useState({
    userId: userId,
    coffeeId: "",
    quantity: 1,
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/cart/${userId}`
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        toast.error("Failed to fetch cart items");
      }
    };

    fetchCartItems();
  }, [userId]);

  // Add a coffee to the cart
  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/cart",
        newCoffee
      );
      setCartItems((prevItems) => [...prevItems, response.data]);
      toast.success("Coffee added to cart!");
      setNewCoffee({ ...newCoffee, coffeeId: "" }); // Clear the coffeeId
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add coffee to cart");
    }
  };

  // Remove a coffee from the cart
  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
      toast.success("Coffee removed from cart!");
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast.error("Failed to remove coffee from cart");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <form onSubmit={handleAddToCart} className="mb-4">
        <input
          type="text"
          placeholder="Coffee ID"
          value={newCoffee.coffeeId}
          onChange={(e) =>
            setNewCoffee({ ...newCoffee, coffeeId: e.target.value })
          }
          required
          className="border p-2 mr-2"
        />
        <input
          type="number"
          value={newCoffee.quantity}
          onChange={(e) =>
            setNewCoffee({ ...newCoffee, quantity: e.target.value })
          }
          required
          min="1"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add to Cart
        </button>
      </form>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center mb-2"
            >
              <span>
                Coffee ID: {item.coffeeId} | Quantity: {item.quantity}
              </span>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="bg-red-500 text-white p-1"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
