import React from "react";
import { Link } from "react-router-dom";
import MetalmorphLogo from "../../../assets/img/metalmorph_logo.png";

function NavbarLogo() {
  return (
    <div className="navbar__logo size-30 md:size-35 lg:size-40 flex items-center justify-center md:justify-start">
      <Link to="/">
        <img
          src={MetalmorphLogo}
          alt="Metalmorph Logo"
          className="Metalmorph Logo size-auto"
        />
      </Link>
    </div>
  );
}

export default NavbarLogo;
