import React from "react";

function ReviewCard({ name, id, image, date, rating, reviewText }) {
  return (
    <div className="w-full md:w-100 p-6 rounded-xl shadow-md bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow min-h-60">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-green-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-green-700">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-red-500 text-lg">
          {"★".repeat(rating)}
          <span className="text-gray-300">{"☆".repeat(5 - rating)}</span>
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed">{reviewText}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
