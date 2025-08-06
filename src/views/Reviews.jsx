import React from "react";
import Navbar from "./../components/Navbar.jsx";
import { REVIEWS_DATA } from "./../configs/Reviews.js";
import ReviewCard from "./../components/cards/ReviewCard.jsx";

function Reviews() {
  return (
    <>
      <Navbar openNav="/review" />
      <div className="flex flex-wrap justify-center gap-5 px-5 my-10">
        {REVIEWS_DATA.map((review) => {
          const { name, id, image, date, rating, reviewText } = review;
          return (
            <div key={id}>
              <ReviewCard
                name={name}
                image={image}
                date={date}
                rating={rating}
                reviewText={reviewText}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Reviews;
