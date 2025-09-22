import React from "react";
import StarRating from "./../StarRating.jsx";

function ReviewCard({ name, image, date, rating, reviewText }) {
  return (
    <div className="w-full md:min-w-85 p-6 rounded-xl shadow-md bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow my-3">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="mt-3">
        <StarRating rating={rating} />
        <p className="mt-2 text-gray-700 leading-relaxed">{reviewText}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
