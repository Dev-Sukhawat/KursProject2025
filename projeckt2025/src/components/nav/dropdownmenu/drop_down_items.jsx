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
    <div className="submenu-wrapper absolute z-100 size-full top-30 left-0 bg-white  shadow-md sm:top-33 lg:top-40 md:text-lg md:mt-3 lg:mt-4">
      <div className="text-red flex items-center justify-center gap-2 mb-2 text-xl ">
        <h1>
          <Link to="/underdeveloped" className="login">
            Log In
          </Link>
        </h1>
        <h1>or</h1>
        <h1>
          <Link to="/underdeveloped" className="signup">
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
        <li className="external__link ml-2">
          <details className="dropdownmenu menu1 group">
            <summary className="heading__dropdownmenu ">
              <div className="flex w-[98%] items-center justify-between ">
                <span>Topics</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="transition-transform duration-300 group-open:rotate-90"
                />
              </div>
            </summary>
            <ul className="submenu__topics grid gap-2 w-[98%]">
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
        <li className="external__link ml-2">
          <details className="dropdownmenu menu2 group">
            <summary className="heading__dropdownmenu">
              <div className="flex w-[98%] items-center justify-between ">
                <span>Category</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="transition-transform duration-300 group-open:rotate-90"
                />
              </div>
            </summary>
            <ul className="submenu__category grid gap-2 w-[98%]">
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
          <Link to="/underdeveloped" className="navbar__link font-bold">
            Membership
          </Link>
        </li>
        <li>
          <Link to="/underdeveloped" className="navbar__link">
            Support
          </Link>
        </li>
        <li>
          <Link to="/underdeveloped" className="navbar__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/underdeveloped" className="navbar__link font-bold">
            Sell your art
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Submenu;
