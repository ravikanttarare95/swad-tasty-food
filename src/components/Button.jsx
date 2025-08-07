import React from "react";

function Button({ btnTitle, size }) {
  return (
    <button
      className={`${
        size === "sm"
          ? "px-3 py-1 text-sm rounded-sm shadow-sm"
          : size === "lg"
          ? "px-6 py-3 text-lg rounded-lg shadow-lg"
          : "px-4 py-2 rounded-md shadow-md"
      } bg-green-500 hover:bg-green-600 text-white   font-semibold  cursor-pointer`}
    >
      {btnTitle}
    </button>
  );
}

function ButtonSecondary({ btnTitle }) {
  return (
    <button className="bg-yellow-300 hover:bg-yellow-500 text-gray-600 px-4 py-2 rounded-md text-sm font-semibold shadow-sm cursor-pointer">
      {btnTitle}
    </button>
  );
}

export default Button;
export { ButtonSecondary };
