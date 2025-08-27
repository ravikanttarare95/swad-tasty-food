import React from "react";
import { useSearchParams, Link, useNavigate } from "react-router";
import MENU_CARDS_DATA from "./../configs/Menu";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Button from "./../components/Button";

function MenuDetails() {
  const [searchParams] = useSearchParams();
  const menuId = searchParams.get("id");
  const menu = MENU_CARDS_DATA.find(({ id }) => id === menuId);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <Button
            btnTitle="← Back to Menu"
            btnVariant="secondary"
            size="sm"
            onBtnClick={() => {
              handleNavigation("/menu");
            }}
          />
          {menu ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mt-6 p-6 md:p-10 flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
                <div className="flex-shrink-0 flex justify-center items-start">
                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="w-72 h-72 object-cover rounded-xl border border-gray-100 shadow-md"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h2 className="text-3xl font-bold text-green-700 mb-2">
                    {menu.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{menu.shortDescription}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-semibold text-red-600">
                      ₹{menu.price}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        menu.category === "veg"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {menu.category === "veg" ? "Veg" : "Non-Veg"}
                    </span>
                  </div>

                  <Button
                    btnTitle="Order Now"
                    btnVariant="primary"
                    size="md"
                    customStyle="w-fit!"
                    onBtnClick={() => {
                      handleNavigation("/cart");
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Short Recipe
                </h3>
                <ul className="space-y-2 bg-green-50/60 rounded-lg p-4 border border-green-100 text-gray-700">
                  {Array.isArray(menu.recipe) ? (
                    menu.recipe.map((step, idx) => <li key={idx}>{step}</li>)
                  ) : (
                    <li>{menu.recipe}</li>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 mt-10 text-center text-red-600 font-semibold">
              Menu item not found.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuDetails;
