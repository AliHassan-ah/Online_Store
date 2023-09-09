import React from "react";
import "./navbar.scss";
import mainLogo from "../../../assets/amazonLogo.svg";
const Navbar = (props) => {
  return (
    <div>
      <div className="navbarWrapper">
        <div className="navBar">
        <div className="logo">
          <img src={mainLogo} alt="" width="80px" />
        </div>
        <div className="serachBar">
          <div className="allBtn">
            
          </div>
        </div>
        </div>
    
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Navbar;
