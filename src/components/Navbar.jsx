import React from "react";
import { Menu } from "lucide-react";
import logo from "./../../public/logo.png";

function Navbar() {
  return (
    <div>
      <img src={logo} alt="Logo" className="size-15" />
      <Menu className="h-6 w-6" />
    </div>
  );
}

export default Navbar;
