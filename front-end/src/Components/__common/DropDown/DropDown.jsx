// import React, { useState,useEffect,useRef } from "react";
// import ArroDown from "../../../assets/arrow-down.svg";

// const DropDown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [iconRotated, setIconRotated] = useState(false);
//   const [options, setOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const dropdownRef = useRef(null);
//   const handleClickOutside = (event)=>{
//     if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
//         setIsOpen(false);
//         setIconRotated(false)
//     }
// }
//   useEffect(()=>{
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//         document.removeEventListener('click', handleClickOutside);
//       };
//   },[])
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setIconRotated(!iconRotated);
//   };
//   const selectOption = (option) => {
//     setSelectedOption(option);
//   };
//   return (
//     <div className="dropdown" ref={dropdownRef}>
//       <div
//         className={`selectedItem ${!selectedOption ? "placeholder" : " "} ${
//           selectedOption ? "selected" : " "
//         }`}
//         onClick={toggleDropdown}
//       >
//         {{ selectedOption } || { placeholder }}
//         <img
//           src={ArroDown}
//           className={`arrowDownIcon ${iconRotated ? "rotated" : ""}`}
//           alt="icon"
//         />
//       </div>
//       {isOpen && (
//         <div className="options">
//           {options.map((option, index) => {
//             <div className="option" key={index} onClick={()=>selectOption(option)}>
//               { option }
//             </div>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropDown;

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
    <div>
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
    </div>
  );
};

export default DropDown;
