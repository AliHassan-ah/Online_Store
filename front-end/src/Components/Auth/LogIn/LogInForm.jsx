import React, { useState,useEffect } from "react";
import Cookies from "js-cookie";
import "./LogInForm.scss";
import { useNavigate  } from 'react-router-dom';
import { useFormik } from "formik";
import { signInSchema } from "../../../schemas";

const LogInForm = () => {
  const initialValues = {
    email:"",
    password : "",
    rememberMe : ""
  }
  const {handleChange,touched,handleBlur,values,errors,handleSubmit } =
  useFormik({
    initialValues,
    validationSchema : signInSchema,
    onSubmit: (values,action)=>{
      console.log("Sing In Values",values);
      action.resetForm();
    }
  })
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate()
 
  //Remember Me
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  useEffect(()=>{
    const rememberedEmail = Cookies.get("rememberedEmail")
    const rememberedPassword = Cookies.get("rememberedPassword")
    if(rememberedEmail){
    }
    if(rememberedPassword){
    }
 
   },[])
   console.log("Remember Me",rememberMe)

  return (
    <div>
      <div className="wrapper">
        <h1>Sign In</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="password-input"
              onChange={handleChange}
              value={values.password}
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
            <button className="submitBtn" type="submit">
              Log In
            </button>
          </div>
          <div className="haveAccount">Not Have amn account? <a onClick={()=>{
            navigate("/sign-in")
          }}>Sin Up</a></div>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
