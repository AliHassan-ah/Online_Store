import React from "react";
import "./SignUp.scss";
const SignUp = () => {
  return (
    <div>
      <div className="wrapper">
        <h1>Sign Up</h1>
        <div className="form">
          <div className="name">
            <label for="name">Enter Your Name</label>:
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="email">
            <label for="email">Enter Email</label>:
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="Password">
            <label for="password">Enter Password</label>:
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="confirmPassword">
            <label for="confirpassword">Enter Password</label>:
            <input
              type="confirmpassword"
              id="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="submitForm">
            <button>Submit Form</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
