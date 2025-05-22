import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

export function NavbarSearch() {
   const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      console.log(query);
      navigate(`/category/${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
    <div className="navbar__search gap-2 flex border-2 rounded-md">
      <input
        type="search"
        name="search"
        id="search"
        aria-label="Search"
        placeholder="Search for..."
        className="navbar__search-input w-full order-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="navbar__search-button order-1"
        onClick={handleSearch}
        type="button"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
    </>
  );
}

export function MdNavbarSearch() {
  const [ifChecked, setIfChecked] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

    const handleSearch = () => {
    if (query.trim()) {
      navigate(`/category/${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = (e) => {
      if (e.matches) {
        setIfChecked(false);
      } else {
        setIfChecked(true);
      }
    };

    // Initial kontroll separat
    if (mediaQuery.matches) {
      setIfChecked(false);
    } else {
      setIfChecked(true);
    }

    // Event listener för framtida ändringar
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <StyledWrapper>
<div className={clsx("container", ifChecked ? "mb-8" : "mb-0")}>
      <input
        className="checkbox"
        type="checkbox"
        checked={ifChecked}
        onChange={(e) => setIfChecked(e.target.checked)}
      />
      <div className="mainbox">
        <div
          className="iconContainer color-white cursor-pointer"
          onClick={handleSearch}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-white"
          />
        </div>
        <input
          className="search_input"
          placeholder="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    box-sizing: border-box;
    width: fit-content;
  }

  .mainbox {
    box-sizing: border-box;
    position: relative;
    width: 230px;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    border-radius: 160px;
    background-color: rgb(0, 0, 0);
    transition: all 0.3s ease;
  }

  .checkbox:focus {
    border: none;
    outline: none;
  }

  .checkbox:checked {
    right: 10px;
  }

  .checkbox:checked ~ .mainbox {
    width: 50px;
  }

  .checkbox:checked ~ .mainbox .search_input {
    width: 0;
    height: 0px;
  }

  .checkbox:checked ~ .mainbox .iconContainer {
    padding-right: 8px;
  }

  .checkbox {
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 17px;
    top: 10px;
    z-index: 9;
    cursor: pointer;
    appearance: none;
  }

  .search_input {
    box-sizing: border-box;
    height: 100%;
    width: 170px;
    background-color: transparent;
    border: none;
    outline: none;
    padding-bottom: 4px;
    padding-left: 10px;
    font-size: 1em;
    color: white;
    transition: all 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .search_input::placeholder {
    color: rgba(255, 255, 255, 0.776);
  }

  .search_icon {
    box-sizing: border-box;
    fill: white;
    font-size: 1.3em;
  }
`;
