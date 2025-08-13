import React from "react";
import Button from "./../Button";

function MenuCard({ id, image, title, shortDescription, price, category }) {
  return (
    <div className="min-h-91 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-red-600">₹{price}</span>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm"
            btnTitle={"Order Now"}
            btnVariant="primary"
            id={id}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
