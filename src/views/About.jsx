import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

function About() {
  return (
    <>
      {" "}
      <Navbar openNav="/about" />
      <div>About</div>
      <Footer />
    </>
  );
}

export default About;
