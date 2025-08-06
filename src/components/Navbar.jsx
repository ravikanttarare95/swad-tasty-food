import React, { useState } from "react";
import logo from "./../../public/logo.png";
import { NAV_LINKS } from "./../configs/Navbar";
import { Link } from "react-router";
import { ShoppingBag, Menu, X } from "lucide-react";

function Navbar({ openNav }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md text-gray-800">
      <div className="px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo + Brand Name */}
        <div className="flex justify-between w-full md:w-fit items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <Link
              to="/"
              className="text-3xl font-extrabold text-green-500 hover:text-green-900 transition"
            >
              Swad
            </Link>
          </div>

          <X
            size={30}
            className={` ${isHidden ? "hidden" : "block"} md:hidden`}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />

          <Menu
            size={30}
            className={` ${isHidden ? "block" : "hidden"} md:hidden`}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
        </div>
        {/* Navigation Links */}
        <div
          className={` ${
            isHidden ? "hidden" : "flex"
          } w-full md:w-[80%] md:flex flex-col items-center gap-3 md:flex-row text-center bg-gray-200 md:bg-transparent rounded pt-3 pb-5 mt-2 md:pt-0 md:pb-0 md:mt-0`}
        >
          <ul className=" space-y-3 md:space-y-0  md:flex md:ml-auto md:space-x-5">
            {NAV_LINKS.map((navlinks) => {
              const { to, navlink } = navlinks;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`${
                      openNav === to
                        ? "border rounded-md"
                        : "border border-transparent"
                    } sm:text-lg font-medium text-gray-700 hover:text-red-500 transition px-2 py-[2px]`}
                    onClick={() => {
                      setIsHidden(!isHidden);
                    }}
                  >
                    {navlink}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Cart and Sign In */}
          <div className="space-y-5 md:space-y-0 flex flex-col md:flex-row md:space-x-5 items-center md:ml-auto">
            <Link
              to="/cart"
              className="flex items-center space-x-1 text-red-500 hover:text-red-600 font-medium transition"
            >
              <span>Cart</span>
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <Link
              to="/sign_in"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
