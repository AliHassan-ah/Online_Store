import React from "react";
import "./SignUpForm.scss";
import { useFormik } from "formik";
import { signuUpSchema } from "../../../schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const { handleChange, touched, handleBlur, values, errors, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signuUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log("Errors", errors);
  return (
    <div className="wrapper">
      <div className="signUpForm">
        <h1>Sign Up</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="name"
              autoComplete="off"
              id="name"
              name="name"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="email">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors?.email}</p>
            ) : null}
          </div>
          <div className="password">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***************"
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors?.password}</p>
            ) : null}
          </div>
          <div className="confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="form-error">{errors?.confirmPassword}</p>
            ) : null}
          </div>
          <div className="submitForm">
            <button type="submit" className="submit-btn">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
