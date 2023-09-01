import React, { useState,useEffect } from "react";
import Cookies from "js-cookie";
import "./LogInForm.scss";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
 
  //Remember Me
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  //Email Validation
  const emailValidation = () => {
    if (!/^.+@.+\..+$/.test(email.trim())) {
      alert("Enter Correct Email Adress");
    }
  };
  //Password Validation
  const passwordValidation = () => {
    // if (
    //   password.trim("") ||
    //   password.length < 3 ||
    //   !/\d/.test(password) // Check if it contains at least one digit
    // ) {
    //   alert("Enter Valid password containing atleast one digit ");
    // }
    // if (!/^.+@.+\..+$/.test(email.trim())) {
    //   alert("Enter Correct Email Adress");
    // }
  };
  //Submit Form
  const submitForm = () => {
    emailValidation();
    passwordValidation()
    if(rememberMe){
        Cookies.set("rememberedEmail",email)
        Cookies.set("rememberedPassword",password)
    }
  };
  useEffect(()=>{
    const rememberedEmail = Cookies.get("rememberedEmail")
    const rememberedPassword = Cookies.get("rememberedPassword")
    if(rememberedEmail){
     setEmail(rememberedEmail)
    }
    if(rememberedPassword){
     setPassword(rememberedPassword)
    }
 
   },[])
   console.log("Remember Me",rememberMe)

  return (
    <div>
      <div className="wrapper">
        <h1>Sign In</h1>
        <div className="form">
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
          <div className="password">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="password-input"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="rememberMe">
            <input
              type="checkbox"
              id="rember-me"
            //   checked={rememberMe}
              onChange={handleRememberMe}
            />
            <label htmlFor="rember-me">Remember Me</label>
          </div>
          <div className="submitForm">
            <button className="submit-btn" onClick={submitForm}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
