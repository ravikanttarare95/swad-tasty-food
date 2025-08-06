import React from "react";
import MENU_CARDS_DATA from "./../configs/Menu";
import Button from "./../components/Button";
import Navbar from "../components/Navbar";

function Menu() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
          Our Delicious Menu
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {MENU_CARDS_DATA.map((item) => {
            const { id, image, title, shortDescription, price } = item;
            return (
              <div
                key={id}
                className="bg-white shadow-lg rounded-xl overflow-hidden w-[90%] sm:w-72 transform transition duration-300 hover:scale-105 border border-gray-200"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 mb-4">{shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">
                      ₹{price}
                    </span>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm"
                      btnTitle={"Order Now"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
