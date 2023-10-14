import React, { useState, useRef, useEffect } from "react";
import ArroDown from "../../../assets/arrow-down.svg";

import "./DropDown.scss";
const DropDown = ({ options, placeHolder }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [rotated, setRotated] = useState(false);
  const dropDownRef = useRef();
  //Functions
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsSelected(true);
    setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleOutsideClick = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target))
      setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setRotated(!rotated)
  };
  return (
      <div className="dropDown" ref={dropDownRef}>
        <div className="selectedElement" onClick={toggleDropdown}>
          {isSelected ? selectedOption : placeHolder}
          <img
            src={ArroDown}
            alt="icon"
            className={`arrowIcon ${rotated ? "rotated" : ""}`}
          />
        </div>
        {isOpen && (
          <div className="options">
            {options?.map((option, index) => (
              <div
                className="option"
                key={index}
                onClick={() => selectOption(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default DropDown;
