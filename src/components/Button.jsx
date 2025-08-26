import React from "react";
import { Link } from "react-router";

function Button({
  btnTitle,
  size,
  btnVariant,
  onBtnClick,
  customStyle,
  disabled,
}) {
  return (
    <button
      className={`
        ${
          size === "sm"
            ? "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base rounded-lg shadow-sm"
            : size === "lg"
            ? "px-4 py-2 text-base sm:px-5 sm:py-2.5 sm:text-lg md:px-6 md:py-3 md:text-xl rounded-lg shadow-md"
            : "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-4.5 md:py-2 md:text-lg rounded-md shadow-md"
        }
        
        ${
          btnVariant === "primary"
            ? "bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-600 text-white cursor-pointer"
            : btnVariant === "secondary"
            ? "bg-gradient-to-r from-yellow-300 to-yellow-400 hover:scale-103 active:scale-100 duration-300 text-yellow-900 cursor-pointer"
            : "bg-gray-200 cursor-not-allowed"
        }
        font-semibold 
        ${customStyle}
      `}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
