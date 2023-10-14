import React from "react";
import "./navbar.scss";
import mainLogo from "../../../assets/amazonLogo.svg";
import DropDown from "../DropDown/DropDown";
const categories = [
  "All Departments",
  "Art & Craft",
  "Automotive",
  "Computers",
];
const Navbar = (props) => {
  return (
    <div>
      <div className="navbarWrapper">
        <div className="navBar">
          <div className="logo">
            <img src={mainLogo} alt="" width="80px" />
          </div>
          <div className="searchBar">
            <div className="searchBar">
              {/* <input placeholder="Search Amazon"/> */}
            </div>
          </div>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Navbar;
