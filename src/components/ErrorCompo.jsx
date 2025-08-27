import React from "react";

function ErrorCompo({ message }) {
  return (
    <p
      className={`${
        message ? "scale-100 max-h-8" : "scale-0 max-h-0 "
      } text-red-500 bg-gray-200 px-4 py-1 rounded-full h-8 transition-all duration-300`}
    >
      {message}
    </p>
  );
}

export default ErrorCompo;
