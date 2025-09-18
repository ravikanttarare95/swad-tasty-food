import React, { useState, useEffect } from "react";

import Button from "./../Button";
import { SquareDot, SquarePlus, SquareMinus } from "lucide-react";
import { Link } from "react-router";
import {
  updateCart,
  handleQuantityMinus,
  handleQuantityPlus,
} from "./../../utils/CartUtils";
import toast from "react-hot-toast";

function MenuCard({ id, image, title, shortDescription, price, category }) {
  const [addedCart, setAddedCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const itemIndex = addedCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
    // OR setIsAdded(itemIndex > -1)
  }, [id, addedCart]);

  const QuantityMinus = (e) => {
    e.preventDefault();
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

  const QuantityPlus = (e) => {
    e.preventDefault();
    const updatedCart = handleQuantityPlus(id);
    setAddedCart(updatedCart);
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // all card is wrapped inside the Link tag. So, it prevents unnecessary navigation whenever we click anywhere inside the card

    const addedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = addedCart.findIndex((item) => item.id === id);
    {
      if (itemIndex === -1) {
        addedCart.push({
          id,
          image,
          title,
          shortDescription,
          price,
          category,
          quantity: 1,
        });
      }
    }
    updateCart(addedCart);
    setIsAdded(true);
    setAddedCart(addedCart);
    toast.success(`${title} added to cart`);
  };

  return (
    <Link to={`/menu-details?id=${id}`}>
      <div className="relative min-h-91 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200">
        <div className="absolute top-2 right-2">
          {category === "veg" ? (
            <SquareDot className="text-green-500 bg-green-100 rounded" />
          ) : (
            <SquareDot className="text-red-500 bg-red-100 rounded" />
          )}
        </div>
        {isAdded && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-4 
                border border-gray-200"
          >
            <SquareMinus
              onClick={QuantityMinus}
              size={26}
              className=" text-red-500 cursor-pointer hover:scale-110 transition"
            />
            <span className="text-gray-800 font-semibold text-lg">
              {addedCart.find((item) => item.id === id)?.quantity}
            </span>
            <SquarePlus
              onClick={QuantityPlus}
              size={26}
              className="text-green-600 cursor-pointer hover:scale-110 transition"
            />
          </div>
        )}
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{shortDescription}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-red-600">₹{price}</span>
            <Button
              btnTitle={isAdded ? "Added" : "Add Item"}
              btnVariant={isAdded ? "disabled" : "primary"}
              size={"md"}
              onBtnClick={handleAddToCart}
              disabled={isAdded}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;
