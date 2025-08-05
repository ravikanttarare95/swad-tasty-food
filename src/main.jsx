import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import Menu from "./views/Menu";
import About from "./views/About";
import Review from "./views/Reviews";
import Cart from "./views/Cart";
import SignIn from "./views/SignIn";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/review" element={<Review />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sign_in" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);
