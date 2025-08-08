import React, { useState, useEffect } from "react";
import logo from "./../../public/logo.png";
import { NAV_LINKS } from "./../configs/Navbar";
import { Link } from "react-router";
import { ShoppingBag, Menu, X } from "lucide-react";

function Navbar({ openNav }) {
  const [isHidden, setIsHidden] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 text-gray-100 ${
        scrolled
          ? "bg-gradient-to-b from-gray-950 to-gray-800"
          : "bg-gradient-to-b from-gray-950 to-gray-950/40"
      }  z-50`}
    >
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
            className={` ${
              isHidden ? "hidden" : "block"
            } md:hidden cursor-pointer`}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />

          <Menu
            size={30}
            className={` ${
              isHidden ? "block" : "hidden"
            } md:hidden cursor-pointer`}
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
        </div>
        {/* Navigation Links */}
        <div
          className={` ${
            isHidden ? "hidden" : "flex"
          } w-full md:w-[80%] md:flex flex-col items-center gap-3 md:flex-row text-center max-md:backdrop-blur-md bg-transparent rounded pt-3 pb-5 mt-2 md:pt-0 md:pb-0 md:mt-0`}
        >
          <ul className=" space-y-3 md:space-y-0  md:flex md:ml-auto md:space-x-7">
            {NAV_LINKS.map((navlinks) => {
              const { to, navlink } = navlinks;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`${
                      openNav === to
                        ? "border rounded-md text-green-500"
                        : "border border-transparent"
                    } sm:text-lg font-medium text-gray-200 hover:text-yellow-400 transition px-2 py-[2px]`}
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
              className="flex items-center space-x-1 text-yellow-400 hover:text-red-600 font-medium transition"
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
