import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          "https://coffee-store-server-tawny-two.vercel.app/cart"
        );
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    try {
      const res = await axios.delete(
        `https://coffee-store-server-tawny-two.vercel.app/cart/${id}`
      );
      console.log(res.data);
      setCart(cart.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.Price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1230px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item?.Image}
                      alt={item.coffeeName}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {item.coffeeName}
                      </h3>
                      <p className="text-gray-600">Price: {item.Price} BDT</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-bold">Total: {totalPrice} BDT</h3>
              <button className="bg-coffee text-white px-4 py-2 rounded hover:bg-coffee-dark transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
