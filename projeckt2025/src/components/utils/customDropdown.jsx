import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CustomDropdown = ({
  options,
  defaultLabel = "Select option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLabel);
  const wrapperRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value); // 🟢 Meddela föräldrakomponenten
    }
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <div className="selected text-sm" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <FontAwesomeIcon
          className={`arrow ${isOpen ? "open" : ""} text-blue-600`}
          icon={faAngleRight}
          size="xl"
        />
      </div>
      {isOpen && (
        <div className="-left-[120%] options columns-3 gap-0">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="option"
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  width: fit-content;
  position: relative;
  color: black;
  cursor: pointer;
  user-select: none;

  .selected {
    border: solid 1px black;
    background-color: white;
    padding: 5px 10px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 150px;
  }

  .arrow {
    fill: white;
    color: blue
    transition: transform 0.3s ease;
    transform: rotate(90deg);
  }

  .arrow.open {
    transform: rotate(0deg);
  }

  .options {
    position: absolute;
    border: solid 1px black;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 5px 0;
    margin-top: 4px;
    z-index: 10;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .option {
    padding: 8px 10px;
    transition: background-color 0.3s;
  }

  .option:hover {
    background-color: var(--links);
    color: white;
  }
`;

export default CustomDropdown;
