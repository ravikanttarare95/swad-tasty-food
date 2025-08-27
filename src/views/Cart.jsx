import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import { SquarePlus, SquareMinus } from "lucide-react";
import {
  updateCart,
  handleQuantityMinus,
  handleQuantityPlus,
} from "./../utils/CartUtils";
import toast, { Toaster } from "react-hot-toast";
import FoodCartImg from "./../assets/food-cart.png";
import Button from "./../components/Button";
import { useNavigate } from "react-router";

function Cart() {
  const [addedCart, setAddedCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const QuantityMinus = (id, title) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item.id === id);

    if (item?.quantity === 1) {
      const updatedCart = handleQuantityMinus(id);
      setAddedCart(updatedCart);
      toast.error(`${title} removed from cart`);
    } else {
      const updatedCart = handleQuantityMinus(id);
      setAddedCart(updatedCart);
    }
  };

  const QuantityPlus = (id) => {
    const updatedCart = handleQuantityPlus(id);
    setAddedCart(updatedCart);
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="p-6 mt-15">
        {addedCart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
            <img
              src={FoodCartImg}
              alt="Food Cart"
              className="w-40 opacity-80"
            />
            <p className="text-gray-700 text-lg font-medium">
              Your cart is empty
            </p>
            <p className="text-gray-500">
              Discover flavors & savor something delicious 🍴
            </p>
            <Button
              btnVariant="primary"
              btnTitle="Explore Menu"
              size={"md"}
              onBtnClick={() => {
                navigate("/menu");
              }}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold mt-18 mb-6">Your Cart</h1>
            {addedCart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 rounded-lg shadow-sm bg-gray-100"
              >
                {/* Image + Details */}
                <div className="flex gap-3 items-center">
                  {/* Hide image on small screens */}
                  <div className="w-16 h-16 rounded overflow-hidden hidden sm:block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm w-fit">
                      <SquareMinus
                        onClick={() => QuantityMinus(item.id, item.title)}
                        className="cursor-pointer text-red-500 hover:scale-110 transition"
                        size={22}
                      />
                      <span className="text-gray-800 font-semibold">
                        {item.quantity}
                      </span>
                      <SquarePlus
                        onClick={() => QuantityPlus(item.id)}
                        className="cursor-pointer text-green-600 hover:scale-110 transition"
                        size={22}
                      />
                    </div>
                  </div>
                </div>

                {/* Total Section */}
                <div className="text-right">
                  <p className="text-gray-700">Qty: {item.quantity}</p>
                  <p className="text-green-600 font-semibold">
                    Total: ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-end border-t-2 border-gray-300 pt-2">
              To Pay:{}{" "}
            </p>
          </div>
        )}
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default Cart;
