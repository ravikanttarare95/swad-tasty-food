import React from "react";
import logo from "./../../public/logo.png";
import { NAV_LINKS } from "./../configs/Navbar";
import { Link } from "react-router";
import { ShoppingBag, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md text-gray-800">
      <div className="px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo + Brand Name */}
        <div className="flex justify-between w-full md:w-fit items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <Link
              to="/"
              className="text-3xl font-extrabold text-green-700 hover:text-green-900 transition"
            >
              Swad
            </Link>
          </div>

          <Menu size={30} className="md:hidden" />
        </div>
        {/* Navigation Links */}
        <div className="w-full md:w-[80%] flex  flex-col items-center gap-3 md:flex-row text-center border md:border-0 rounded pt-3 pb-5 mt-2">
          <ul className=" space-y-3 md:space-y-0  md:flex md:ml-auto md:space-x-5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="sm:text-lg font-medium text-gray-700 hover:text-amber-600 transition"
                >
                  {link.navlink}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart and Sign In */}
          <div className="space-y-5 md:space-y-0 flex flex-col md:flex-row md:space-x-5 items-center md:ml-auto">
            <Link
              to="/cart"
              className="flex items-center space-x-1 text-red-600 hover:text-red-800 font-medium transition"
            >
              <span>Cart</span>
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <Link
              to="/sign_in"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
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
