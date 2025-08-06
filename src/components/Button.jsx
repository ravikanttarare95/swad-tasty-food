import React from "react";

function Button({ btnTitle }) {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm cursor-pointer">
      {btnTitle}
    </button>
  );
}

export default Button;
