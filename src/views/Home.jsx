import { useNavigate } from "react-router";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer.jsx";
import Button from "./../components/Button";
import MENU_CARDS_DATA from "./../configs/Menu";
import HeroImg from "./../assets/hero.jpg";
import { HeadingSecondary } from "./../components/Heading.jsx";
import MenuCard from "./../components/cards/MenuCard.jsx";

function Home() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="bg-white min-h-screen">
      <Navbar openNav="/" />

      <section className="relative">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden shadow-xl">
          <img
            src={HeroImg}
            alt="Delicious Indian Cuisine"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/60 to-black/50" />

          <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-center text-white px-4 max-md:pb-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-2 md:mb-4">
              Welcome to <span className="text-yellow-300">Swad</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-4 md:mb-6 md:leading-relaxed drop-shadow-md">
              Experience the authentic taste of India with our delicious,
              home-style meals. Fresh ingredients, traditional recipes, and a
              warm ambiance await you!
            </p>

            <Button
              onBtnClick={() => {
                handleNavigation("/menu");
              }}
              btnTitle={"Explore Menu"}
              btnVariant={"primary"}
              size={"lg"}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <HeadingSecondary headingTitle="Why choose Swad" />
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Discover what makes Swad a special destination for lovers of
            authentic Indian cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-green-50 hover:bg-green-100 transition rounded-xl shadow-md p-6 text-center border-t-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Authentic Flavors
            </h3>
            <p className="text-gray-600">
              We bring you the real taste of India using age-old traditional
              recipes and hand-picked spices.
            </p>
          </div>

          <div className="bg-red-50 hover:bg-red-100 transition rounded-xl shadow-md p-6 text-center border-t-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-700 mb-3">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600">
              Every dish is crafted with farm-fresh vegetables and quality
              ingredients for a healthy, delicious meal.
            </p>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition rounded-xl shadow-md p-6 text-center border-t-4 border-gray-600">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Warm Ambiance
            </h3>
            <p className="text-gray-600">
              Enjoy your meals in a cozy and inviting atmosphere that feels like
              home — whether dining in or ordering out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <HeadingSecondary headingTitle="How to Order" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-4xl text-green-500 mb-4 border w-fit px-3 rounded mx-auto">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Browse the Menu</h3>
            <p className="text-gray-600">
              Explore a wide variety of Indian delicacies curated just for you.
            </p>
          </div>
          <div>
            <div className="text-4xl text-green-500 mb-4 border w-fit px-3 rounded mx-auto">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Place Your Order</h3>
            <p className="text-gray-600">
              Order online for delivery or pickup. Quick, easy, and convenient!
            </p>
          </div>
          <div>
            <div className="text-4xl text-green-500 mb-4 border w-fit px-3 rounded mx-auto">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Enjoy Your Meal</h3>
            <p className="text-gray-600">
              Delicious, home-style meals delivered hot and fresh to your door.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <HeadingSecondary headingTitle="Our Popular Dishes" />

        <div className="flex flex-wrap justify-center gap-10">
          {MENU_CARDS_DATA.slice(0, 4).map(
            ({ id, image, title, shortDescription, price, category }) => (
              <div
                key={id}
                className="bg-white rounded-xl overflow-hidden w-72 transform transition duration-300 hover:scale-105 border border-gray-200"
              >
                <MenuCard
                  id={id}
                  image={image}
                  title={title}
                  shortDescription={shortDescription}
                  price={price}
                  category={category}
                />
              </div>
            )
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onBtnClick={() => {
              handleNavigation("/menu");
            }}
            btnTitle="View Full Menu"
            btnVariant="secondary"
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Taste the Best?
        </h2>
        <p className="text-lg mb-8">
          Order online or visit us for an unforgettable dining experience!
        </p>

        <Button
          onBtnClick={() => {
            handleNavigation("/cart");
          }}
          btnTitle="Order Now"
          btnVariant="secondary"
          size={"lg"}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
