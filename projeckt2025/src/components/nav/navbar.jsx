import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUsers,
  faBookmark,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar mt-2 bg-white shadow-md p-4">
        <div className="flex w-full justify-arround items-center">
          <details>
            <summary className="navbar__title hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faBars}
                className="hamburgarbar text-3xl mx-3"
              />
              <p className=" text-lg font-bold">Menu</p>
            </summary>
            <ul className="navbar__links grid absoulte">
              <li>
                <a href="#home" className="navbar__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#topics" className="navbar__link">
                  Topics
                </a>
              </li>
              <li>
                <a href="#category" className="navbar__link">
                  Category
                </a>
              </li>
              <li>
                <a href="#whatMetalMorph" className="navbar__link">
                  What’s a MetalMorph
                </a>
              </li>
              <li>
                <a href="#members" className="navbar__link">
                  MetalMorph Members
                </a>
              </li>
              <li>
                <a href="#support" className="navbar__link">
                  Support
                </a>
              </li>
              <li>
                <a href="#about" className="navbar__link">
                  About
                </a>
              </li>
              <li>
                <a href="#sell" className="navbar__link">
                  Sell your art
                </a>
              </li>
            </ul>
          </details>
          <div className="navbar__logo size-25">
            <img
              src="/img/MetalmorphLogo.png"
              alt="Metalmorph Logo"
              className="Metalmorph Logo size-auto"
            />
          </div>
          <div className="navbar__top__treBtn flex gap-5">
            <a href="#join-us" className="navbar__icon-link">
              <FontAwesomeIcon
                icon={faUsers}
                className="navbar__icon text-2xl"
              />
              <br />
              <span className="navbar__icon-text">Join</span>
            </a>
            <a href="#like" className="navbar__icon-link">
              <FontAwesomeIcon
                icon={faBookmark}
                className="navbar__icon text-2xl"
              />
              <br />
              <span className="navbar__icon-text">Like</span>
            </a>
            <a href="#cart" className="navbar__icon-link">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="navbar__icon text-2xl"
              />
              <br />
              <span className="navbar__icon-text">Cart</span>
            </a>
          </div>
        </div>
        <div className="navbar__search">
          <input
            type="serch"
            name="search"
            id="search"
            aria-label="Search"
            placeholder="Search for..."
            className="navbar__search-input"
          />
          <button className="navbar__search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
