import React from "react";
import { Link } from "react-router";

function Button({ btnTitle, size, id, btnVariant , linkTo}) {
  return (
    <button
      className={`${
        size === "sm"
          ? "px-3 py-1 text-sm rounded-sm shadow-sm"
          : size === "lg"
          ? "px-6 py-3 text-lg rounded-lg shadow-lg"
          : "px-4 py-2 rounded-md shadow-md"
      }
      
     ${
       btnVariant === "primary"
         ? "bg-green-500 hover:bg-green-600 text-white"
         : btnVariant === "secondary"
         ? "bg-yellow-300 hover:bg-yellow-300 text-gray-800"
         : "bg-gray-200"
     }    font-semibold  cursor-pointer`}
    >
      <Link to={`/menu-details?id=${id}`}>{btnTitle}</Link>
    </button>
  );
}

export default Button;
