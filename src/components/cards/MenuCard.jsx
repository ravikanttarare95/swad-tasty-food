import React from "react";
import Button from "./../Button";
import { SquareDot } from "lucide-react";
import { Link } from "react-router";

function MenuCard({ id, image, title, shortDescription, price, category }) {

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = cart.findIndex((item) => item.id === id);

    {
      cart.push({
        id,
        image,
        title,
        shortDescription,
        price,
        category,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
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
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{shortDescription}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-red-600">₹{price}</span>
            <Button
              btnTitle={"Add Item"}
              btnVariant="primary"
              size={"md"}
              onBtnClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;
