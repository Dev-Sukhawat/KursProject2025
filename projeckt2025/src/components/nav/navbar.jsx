import React from "react";
import "./Navbar.css";
import NavbarLogo from "./navbarlogo/nav_bar_logo.jsx";
import Checkbox from "./burgermenu/burgermenu.jsx";
import Submenu from "./dropdownmenu/drop_down_items.jsx";
import NavbarBtn from "./navbarbtn/navbarbtn.jsx";
import { NavbarSearch } from "./navbar_search/search.jsx";
import { useState } from "react";

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleMenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <section className="navbar-container">
      <nav className="navbar md:hidden mt-1 bg-white shadow-md p-2 ">
        <div className="flex w-full justify-between items-center md:hidden">
          <Checkbox onClick={toggleMenu} />
          {showSubmenu && <Submenu />}
          <NavbarLogo />
          <NavbarBtn />
        </div>
        <NavbarSearch />
      </nav>
      <nav className="navbar hidden md:block shadow-md md:mt-2 md:p-4 lg:mt-3 lg:p-6 flex gap-2 md:gap-4 lg:gap-6 ">
        <div className="hidden md:grid md:grid-cols-3 w-full md:gap-10 justify-center items-center ">
          <Checkbox onClick={toggleMenu} />
          {showSubmenu && <Submenu />}
          <NavbarLogo />
          <NavbarBtn />
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
