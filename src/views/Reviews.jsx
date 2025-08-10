import React, { useState } from "react";
import Navbar from "./../components/Navbar.jsx";
import { REVIEWS_DATA } from "./../configs/Reviews.js";
import ReviewCard from "./../components/cards/ReviewCard.jsx";
import Footer from "./../components/Footer.jsx";
import InputComp from "./../components/InputComp.jsx";
import Button from "./../components/Button.jsx";
import SpicesImg from "./../assets/review.jpg";
import Heading from "../components/Heading.jsx";

function Reviews() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    date: "",
    rating: "",
    reviewText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review submitted! (Add your submission logic)");
    setFormData({
      name: "",
      image: "",
      date: "",
      rating: "",
      reviewText: "",
    });
  };

  return (
    <>
      <Navbar openNav="/review" />
      <div className="px-5 mb-5 pt-25 sm:pt-35 gap-8">
        <Heading headingTitle="What Our Customers say . . ." />

        <div className="flex flex-col max-h-125 md:flex-row overflow-scroll scrollbar-hide max-w-300 mx-auto gap-5 mb-20">
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

        <div className="relative h-[447px] max-w-[700px] mx-auto rounded-sm overflow-hidden shadow-2xl">
          <img
            src={SpicesImg}
            alt="Image"
            className="object-cover w-full h-full opacity-80"
          />

          <div
            className="absolute top-0 right-0 w-full md:max-w-100 
    bg-gradient-to-r from-black/50 to-black/20 backdrop-blur-[2px] 
    border border-white/20 shadow-xl p-6 rounded-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-md border-b border-white/30 pb-2">
              Submit Your Review
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <InputComp
                type="text"
                name="name"
                value={formData.name}
                onchange={handleChange}
                placeholder="Your Name"
              />
              <InputComp
                type="url"
                name="image"
                value={formData.image}
                onchange={handleChange}
                placeholder="Image URL"
              />
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                className="bg-white/10 text-white border border-white/30 rounded-lg px-3 py-2 outline-none focus:border-yellow-400"
              >
                <option value="" disabled className="text-gray-700">
                  Rating
                </option>
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r} className="text-gray-900">
                    {r} Star{r > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
              <textarea
                name="reviewText"
                value={formData.reviewText}
                onChange={handleChange}
                placeholder="Write your review"
                required
                rows={4}
                className="bg-white/10 text-white placeholder-white/70 border border-white/30 rounded-lg px-3 py-2 resize-none outline-none focus:border-yellow-400"
              />
              <Button type="submit" btnTitle="Submit Review" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reviews;
