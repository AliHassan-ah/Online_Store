import React, { useState } from "react";
import "./SignUp.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //Name Validation
  const nameValidation = () => {
    if (name.trim() === "") {
      alert("Name is Required")
    }
  }
  //Email Validation
  const emailValidation = () => {
    if (!/^.+@.+\..+$/.test(email.trim())) {
      alert("Enter Correct Email Adress")
    }
  }
  //Password Validation
  const passwordValidation = () => {
    if (password.trim("") || password.length < 3 || !/\d/.test(password)                 // Check if it contains at least one digit
    ) {
      alert("Enter Valid password containing atleast one digit ")

    }
    if (!/^.+@.+\..+$/.test(email.trim())) {
      alert("Enter Correct Email Adress")
    }
  }
  //Submit Form
  const submitForm = () => {
    nameValidation()
    emailValidation()
  }

  return (
    <div>
      <div className="wrapper">
        <h1>Sign Up</h1>
        <div className="form">
          <div className="name">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="Password">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="submitForm">
            <button className="submit-btn" onClick={submitForm}>Submit Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
