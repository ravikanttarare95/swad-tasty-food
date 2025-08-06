import React from "react";

function StarRating({ rating }) {
  return (
    <p className="text-red-500 text-lg">
      {"★".repeat(rating)}
      <span className="text-gray-300">{"☆".repeat(5 - rating)}</span>
    </p>
  );
}

export default StarRating;
