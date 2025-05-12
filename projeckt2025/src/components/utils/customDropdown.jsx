import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const CustomDropdown = ({ options, defaultLabel = 'Select option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLabel);
  const wrapperRef = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <svg xmlns="http://www.w3.org/2000/svg" className={`arrow ${isOpen ? 'open' : ''}`} viewBox="0 0 512 512">
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>
      {isOpen && (
        <div className="-left-[250%] options columns-5 gap-0">
          {options.map((opt) => (
            <div key={opt.value} className="option" onClick={() => handleSelect(opt.label)}>
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
  font-size: 15px;
  color: white;
  cursor: pointer;
  user-select: none;

  .selected {
    background-color: #2a2f3b;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 150px;
  }

  .arrow {
    width: 15px;
    height: 15px;
    fill: white;
    transition: transform 0.3s ease;
    transform: rotate(-90deg);
  }

  .arrow.open {
    transform: rotate(0deg);
  }

  .options {
    position: absolute;
    background-color: #2a2f3b;
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
    background-color: #323741;
  }
`;

export default CustomDropdown;
