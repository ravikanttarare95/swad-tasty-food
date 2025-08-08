import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import AboutCard from "./../components/cards/AboutCard";
import { ABOUT_CARD_DATA } from "./../configs/About.js";
import AboutTeam from "./../assets/about/about-team.jpg";

function About() {
  return (
    <>
      <Navbar openNav="/about" />

      <section className="bg-white min-h-screen px-4 pb-16 pt-25 sm:pt-35">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-10">
            About <span className="text-green-600">Swad</span>
          </h1>

          {/* Image + Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <img
                src={AboutTeam}
                alt="Our Kitchen"
                className="rounded-lg shadow-lg w-full object-cover h-[300px] md:h-[400px]"
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At <strong>Swad</strong>, we believe in celebrating the rich
                heritage and flavors of Indian cuisine. Founded with a passion
                for traditional recipes and fresh ingredients, Swad brings you a
                dining experience that's both heartwarming and delicious.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Thank you for choosing Swad — where every bite feels like home.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Swad started as a small family-owned kitchen with one goal — to
              share the love of Indian home-cooked meals with the community.
              What began as weekend tiffins for neighbors has now grown into a
              beloved eatery that continues to uphold its commitment to
              authenticity, hospitality, and quality food.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To be the go-to destination for authentic Indian food lovers,
                offering a cozy space where tradition and taste meet.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To serve delicious, wholesome meals with exceptional hospitality
                while maintaining the integrity of Indian culinary traditions.
              </p>
            </div>
          </div>

          {/* Our Team Section */}
          <section className="mt-20 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">
              Meet Our Team
            </h2>

            <div className="mx-auto flex flex-wrap justify-center gap-10">
              {/* Team Member 1 */}
              {ABOUT_CARD_DATA.map((member) => {
                const { id, image, name, role, desc } = member;
                return (
                  <div key={id}>
                    <AboutCard
                      image={image}
                      name={name}
                      role={role}
                      desc={desc}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
