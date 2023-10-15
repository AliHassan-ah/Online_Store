import React from "react";
import "./SignUpForm.scss";
import { useFormik } from "formik";
import { signuUpSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import userService from "../../../Services/UserService";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  let navigate = useNavigate();
  const { handleChange, touched, handleBlur, values, errors, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signuUpSchema,
      onSubmit: (values, action) => {
        userService
          .addUser(values)
          .then((data) => {
            console.log("Login Data", data);
          })
          .catch((err) => console.log("Sign Up Error", err));
        console.log(values);
        action.resetForm();
      },
    });
  console.log("Errors", errors);
  return (
    <div className="wrapper">
      <div className="signUpForm">
        <div className="heading">Sign Up</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="dataField">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
              className="inputFiled"
            />
            {errors.name && touched.name ? (
              <p className="formError">{errors.name}</p>
            ) : null}
          </div>
          <div className="dataField">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="inputFiled"
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="formError">{errors?.email}</p>
            ) : null}
          </div>
          <div className="dataField">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***************"
              onChange={handleChange}
              className="inputFiled"
              value={values.password}
            />
            {errors.password && touched.password ? (
              <p className="formError">{errors?.password}</p>
            ) : null}
          </div>
          <div className="dataField">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="inputFiled"
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="formError">{errors?.confirmPassword}</p>
            ) : null}
          </div>
          <div className="haveAccount">
            Already have an account?{" "}
            <a
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Login
            </a>
          </div>
          <div className="formBtn">
            <button type="submit" className="submitBtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
