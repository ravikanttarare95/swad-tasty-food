import React from "react";
import MENU_CARDS_DATA from "./../configs/Menu";
import Navbar from "./../components/Navbar";
import MenuCard from "./../components/cards/MenuCard";
import Footer from "./../components/Footer";

function Menu() {
  return (
    <>
      <Navbar openNav="/menu" />
      <div className="min-h-screen bg-gray-100 pb-10 px-8 pt-25 sm:pt-35">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
          Our Delicious Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-270 mx-auto">
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
      <Footer />
    </>
  );
}

export default Menu;
