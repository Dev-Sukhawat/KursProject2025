import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBookmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { MdNavbarSearch } from "../navbar_search/search.jsx";

export default function Btn() {
  return (
    <section className="top__treBtn__container flex items-center justify-between md:gap-4 lg:gap-6 md:justify-end ">
      <ul className="navbar__top__treBtn__list flex gap-2 justify-center items-center text-lg gap-2 md:text-2xl md:gap-4 lg:gap-6">
        <li className="hidden md:block items-center justify-center">
          <MdNavbarSearch />
        </li>
        <li>
          <Link
            to="/login"
            className="navbar__icon-link grid place-items-center md:gap-1"
          >
            <FontAwesomeIcon
              icon={faUsers}
              className="navbar__icon text-2xl md:text-4xl"
            />
            <h1 className="navbar__icon-text">Join</h1>
          </Link>
        </li>
        <li>
          <Link
            to="/likes"
            className="navbar__icon-link grid place-items-center md:gap-1"
          >
            <FontAwesomeIcon
              icon={faBookmark}
              className="navbar__icon text-2xl md:text-4xl"
            />
            <h1 className="navbar__icon-text">Like</h1>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="navbar__icon-link grid place-items-center md:gap-1"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="navbar__icon text-2xl md:text-4xl"
            />
            <h1 className="navbar__icon-text">Cart</h1>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export function Buybtn() {
  return (
    <section className="top__treBtn__container flex items-center justify-between md:gap-4 lg:gap-6 md:justify-end ">
      <ul className="navbar__top__treBtn__list flex gap-2 justify-center items-center text-lg gap-2 md:text-2xl md:gap-4 lg:gap-6">
        <li className="hidden md:block items-center justify-center">
          <MdNavbarSearch />
        </li>
        <li>
          <Link
            to="/login"
            className="navbar__icon-link grid place-items-center md:gap-1"
          >
            <FontAwesomeIcon
              icon={faUsers}
              className="navbar__icon text-2xl md:text-4xl"
            />
            <h1 className="navbar__icon-text">Join</h1>
          </Link>
        </li>
        <li>
          <Link
            to="/likes"
            className="navbar__icon-link grid place-items-center md:gap-1"
          >
            <FontAwesomeIcon
              icon={faBookmark}
              className="navbar__icon text-2xl md:text-4xl"
            />
            <h1 className="navbar__icon-text">Like</h1>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="navbar__icon-link grid place-items-center md:gap-1"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="navbar__icon text-2xl md:text-4xl"
            />
            <h1 className="navbar__icon-text">Cart</h1>
          </Link>
        </li>
      </ul>
    </section>
  );
}

