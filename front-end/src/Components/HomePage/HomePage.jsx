import React from "react";
import "./HomePage.scss";
import DisplayCard from "./DisplayCard/DisplayCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const options = ["Hello", "HI"];
  const placeHolder = "TRee";
  return (
    <div className="HomePageContainer">
      <div className="SignInCardWrapper">
        <div className="signInCard">
          <div className="description">Sign in for the best experience</div>
          <Link to="/sign-in">
            <div className="signInButton">Sign in securely</div>
          </Link>
          {/* <div>This is my Secret Key{process.env.REACT_APP_SECRET_KEY}</div> */}
        </div>
        <div></div>
      </div>

      <DisplayCard />
    </div>
  );
};

export default HomePage;
