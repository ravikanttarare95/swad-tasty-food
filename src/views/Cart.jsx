import React from "react";
import Navbar from "./../components/Navbar";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold my-15">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-lg shadow-sm bg-white"
              >
                <div>
                  <div className="flex gap-3 items-center">
                    <div className="w-13 h-13 rounded overflow-hidden ">
                      <img src={item.image} alt={item.title} className="" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-red-600 font-bold">₹{item.price}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">Qty: {item.quantity}</p>
                  <p className="text-green-600 font-semibold">
                    Total: ₹{[item.price] * [item.quantity]}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-end">To Pay:{} </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
