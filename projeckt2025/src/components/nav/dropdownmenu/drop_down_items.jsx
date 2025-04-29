import React from "react";
import "./drop_down_items.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Submenu() {
  const categoryslistboarditem = [
    { id: 1, list: "Anime" },
    { id: 2, list: "Gaming & Fantasy" },
    { id: 3, list: "Movies & Shows" },
    { id: 4, list: "Nature" },
  ];
  const topicslistboarditem = [
    { id: 1, list: "News" },
    { id: 2, list: "Popular" },
    { id: 3, list: "Limited" },
    { id: 4, list: "Inspirations" },
  ];

  return (
    <div className="submenu-wrapper absolute z-100 size-full top-30 left-0 bg-white  shadow-md md:text-lg">
      <div className="text-red flex items-center justify-center gap-2 mb-2 text-xl">
        <h1>
          <Link className="login" to="login">
            Log In
          </Link>
        </h1>
        <h1>or</h1>
        <h1>
          <Link className="signup" to="signup">
            Sign Up
          </Link>
        </h1>
      </div>
      <ul className="navbar__links grid">
        <li>
          <Link to="/" className="navbar__link font-bold">
            Home
          </Link>
        </li>
        <li className="external__link">
          <details className="dropdownmenu menu1 ">
            <summary className="heading__dropdownmenu">
              Topics
              <FontAwesomeIcon icon={faChevronRight} className="mr-3" />
            </summary>
            <ul className="submenu__topics grid gap-2">
              {topicslistboarditem.map((item) => (
                <li key={item.id}>
                  <Link to={`/topics/${item.list.replace(/\s+/g, "")}`}>
                    {item.list}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li className="external__link">
          <details className="dropdownmenu menu2">
            <summary className="heading__dropdownmenu">
              Category
              <FontAwesomeIcon icon={faChevronRight} className="mr-3" />
            </summary>
            <ul className="submenu__category grid gap-2">
              {categoryslistboarditem.map((item) => (
                <li key={item.id}>
                  <Link to={`/category/${item.list.replace(/\s+/g, "")}`}>
                    {item.list}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <Link to="/membership" className="navbar__link font-bold">
            Membership
          </Link>
        </li>
        <li>
          <Link to="/support" className="navbar__link">
            Support
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/sell" className="navbar__link font-bold">
            Sell your art
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Submenu;
