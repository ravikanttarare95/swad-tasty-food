import React from "react";
import { REVIEWS_DATA } from "./../configs/Reviews.js";

function Reviews() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {REVIEWS_DATA.map((review) => {
        const { name, id, image, date, rating, reviewText } = review;
        return (
          <div key={id} className="border p-4 rounded shadow w-100">
            <div className="flex items-center space-x-4">
              <img src={image} alt={name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-yellow-500">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </p>
              <p className="mt-1 text-gray-700">{reviewText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
