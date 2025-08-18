import React, { useState } from "react";
import Navbar from "./../components/Navbar.jsx";
import { REVIEWS_DATA } from "./../configs/Reviews.js";
import ReviewCard from "./../components/cards/ReviewCard.jsx";
import Footer from "./../components/Footer.jsx";
import InputComp from "./../components/InputComp.jsx";
import Button from "./../components/Button.jsx";
import SpicesImg from "./../assets/review.jpg";
import Heading from "./../components/Heading.jsx";
import { X } from "lucide-react";

function Reviews() {
  const [reviewFormStatus, setReviewFormStatus] = useState(false);
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
    setReviewFormStatus(false);
  };

  return (
    <>
      <div
        className={`${
          reviewFormStatus ? "flex" : "hidden"
        } fixed inset-0 items-center justify-center bg-black/40 backdrop-blur-sm z-[100]`}
      >
        <div className="relative w-[95%] max-w-[700px] rounded-xl overflow-hidden shadow-2xl border border-white/20">
          <img
            src={SpicesImg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          <div className="relative z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent p-6 sm:p-8 rounded-xl">
            <X
              size={32}
              className="absolute top-4 right-4 text-white cursor-pointer hover:scale-125 transition-transform"
              onClick={() => setReviewFormStatus(false)}
            />

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white border-b border-white/30 pb-2">
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

              <Button
                type="submit"
                btnVariant="secondary"
                btnTitle="Submit Review"
              />
            </form>
          </div>
        </div>
      </div>

      <Navbar openNav="/review" />
      <div className="px-5 mb-5 pt-25 sm:pt-35 gap-8">
        <Heading headingTitle="What Our Customers say . . ." />
        <div className="relative max-w-300 mx-auto mb-20">
          <div className="flex flex-col max-h-125 md:flex-row overflow-scroll scrollbar-hide gap-5 px-5">
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

          {/* Left shadow */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent"></div>

          {/* Right shadow */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="flex justify-center md:justify-end gap-4 mb-10 max-w-300 mx-auto">
          <Button
            btnTitle="Share Your Experience"
            btnVariant="secondary"
            onBtnClick={() => {
              setReviewFormStatus(true);
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reviews;
