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
const DropDown = ({ options, placeHolder }) => {
  const [isSelected, setIsSelected] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState("");
const dropDownRef = useRef();
//Functions
const selectOption = (option) => {
  setSelectedOption(option);
  setIsSelected(true);
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
    };
  return (
    <div>
      <div className="dropDown" ref={dropDownRef}>
        <div className="selectedElement" onClick={toggleDropdown}>
          {isSelected ? selectedOption : placeHolder}
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
