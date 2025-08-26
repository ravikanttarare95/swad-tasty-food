import React, { useState, useEffect } from "react";

import Button from "./../Button";
import { SquareDot, SquarePlus, SquareMinus } from "lucide-react";
import { Link } from "react-router";

function MenuCard({ id, image, title, shortDescription, price, category }) {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const addedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = addedCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      setIsAdded(true);
      setQuantity(addedCart[itemIndex].quantity);
    }
    console.log("S", itemIndex); ////////////
  }, [id]);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityMinus = (e) => {
    e.preventDefault(); // all card is wrapped inside the Link tag. So, it prevents unnecessary navigation whenever we click anywhere inside the card

    const addedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = addedCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      addedCart[itemIndex].quantity -= 1;

      if (addedCart[itemIndex].quantity <= 0) {
        addedCart.splice(itemIndex, 1);
        setIsAdded(false);
        setQuantity(1);
      } else {
        setQuantity(addedCart[itemIndex].quantity);
      }
    }
    updateCart(addedCart);
  };

  const handleQuantityPlus = (e) => {
    e.preventDefault(); // all card is wrapped inside the Link tag. So, it prevents unnecessary navigation whenever we click anywhere inside the card

    const addedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = addedCart.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      addedCart[itemIndex].quantity += 1;
      setQuantity(addedCart[itemIndex].quantity);
    }
    updateCart(addedCart);
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // all card is wrapped inside the Link tag. So, it prevents unnecessary navigation whenever we click anywhere inside the card

    const addedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = addedCart.findIndex((item) => item.id === id);
    {
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

    localStorage.setItem("cart", JSON.stringify(addedCart));
    setIsAdded(true);
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
          <div className="absolute text-green-500 bg-green-50 rounded">
            <SquareMinus onClick={handleQuantityMinus} />
            {quantity}
            <SquarePlus onClick={handleQuantityPlus} />
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
