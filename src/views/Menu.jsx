import React from "react";
import MENU_CARDS_DATA from "./../configs/Menu";
import Button from "./../components/Button";
import Navbar from "./../components/Navbar";
import MenuCard from "./../components/cards/MenuCard";

function Menu() {
  return (
    <>
      <Navbar openNav="/menu" />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
          Our Delicious Menu
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {MENU_CARDS_DATA.map((item) => {
            const { id, image, title, shortDescription, price } = item;
            return (
              <div key={id}>
                <MenuCard
                  image={image}
                  title={title}
                  shortDescription={shortDescription}
                  price={price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
