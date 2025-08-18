import React from "react";
import Button from "./../Button";
import { SquareDot } from "lucide-react";

function MenuCard({ id, image, title, shortDescription, price, category }) {
  return (
    <div className="relative min-h-91 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">₹{price}</span>
          <Button
            linkTo={`/menu-details?id=${id}`}
            btnTitle={"Order Now"}
            btnVariant="primary"
            size={"md"}
          />
        </div>
      </div>{" "}
      <div className="absolute top-2 right-2">
        {category === "veg" ? (
          <SquareDot className="text-green-500 bg-green-100 rounded" />
        ) : (
          <SquareDot className="text-red-500 bg-red-100 rounded" />
        )}
      </div>
    </div>
  );
}

export default MenuCard;
