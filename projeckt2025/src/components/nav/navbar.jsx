import React from "react";
import "./Navbar.css";
import NavbarLogo from "./navbarlogo/nav_bar_logo.jsx";
import Checkbox from "./burgermenu/burgermenu.jsx";
import Submenu from "./dropdownmenu/drop_down_items.jsx";
import NavbarBtn from "./navbarbtn/navbarbtn.jsx";
import { NavbarSearch, MdNavbarSearch } from "./navbar_search/search.jsx";
import { useState } from "react";

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleMenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <>
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
        <div className="hidden md:flex w-full  justify-between items-center ">
          <Checkbox onClick={toggleMenu} />
          {showSubmenu && <Submenu />}
          <NavbarLogo />
          <MdNavbarSearch />
          <NavbarBtn />
        </div>
      </nav>
    </>
  );
}

// function Navbar() {
//   const [showSubmenu, setShowSubmenu] = useState(false);

//   const toggleMenu = () => {
//     setShowSubmenu(!showSubmenu);
//   };

//   return (
//     <nav className="navbar mt-1 bg-white shadow-md p-2 md:mt-2 md:p-4 lg:mt-3 lg:p-6 flex flex-col gap-2 md:gap-4 lg:gap-6">
//       {/* Första raden: Logo + Sök + Knapp (i rad på md och uppåt) */}
//       <div className="flex w-full justify-between items-center flex-col md:flex-row md:gap-4">
//         <div className="flex w-full items-center justify-between">
//           <Checkbox onClick={toggleMenu} />
//           {showSubmenu && <Submenu />}
//           <div className="md:hidden">
//             <NavbarLogo />
//             <NavbarBtn />
//           </div>
//         </div>

//         {/* Wrapper för Logo, Sök och Btn på md+ */}
//         <div className="hidden md:flex w-full items-center justify-between gap-4">
//           <NavbarLogo />
//           <NavbarSearch />
//           <NavbarBtn />
//         </div>
//       </div>

//       {/* Visa sökfältet separat på mobil (där ovan är gömd) */}
//       <div className="block md:hidden">
//         <NavbarSearch />
//       </div>
//     </nav>
//   );
// }

export default Navbar;
