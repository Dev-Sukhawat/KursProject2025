import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function NavbarSearch() {
  return (
    <>
      <div className="navbar__search gap-2 flex border-2 rounded-md">
        <input
          type="serch"
          name="search"
          id="search"
          aria-label="Search"
          placeholder="Search for..."
          className="navbar__search-input w-full order-2"
        />
        <button className="navbar__search-button order-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}

export function MdNavbarSearch() {
  return (
    <>
      <div className="navbar__search gap-2 flex w-[3fr] border-2 rounded-md">
        <input
          type="serch"
          name="search"
          id="search"
          aria-label="Search"
          placeholder="Search for..."
          className="navbar__search-input w-auto order-2"
        />
        <button className="navbar__search-button order-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}
