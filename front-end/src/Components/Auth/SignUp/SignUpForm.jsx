import React, { useState } from "react";
import "./SignUpForm.scss";
import { useFormik } from "formik";
import { signuUpSchema } from "../../../schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  }
const SignUpForm = () => {
 const {handleChange,handleBlur,values,errors,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signuUpSchema,
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  console.log("Errors",errors)
  return (
    <div className="wrapper">
      <div className="signUpForm">
        <h1>Sign Up</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              placeholder="Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***************"
              required
              onChange={handleChange}
            />
          </div>
          <div className="confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={handleChange}

            />
          </div>
          <div className="submitForm">
            <button type="submit" className="submit-btn">Submit Form</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default SignUpForm;
