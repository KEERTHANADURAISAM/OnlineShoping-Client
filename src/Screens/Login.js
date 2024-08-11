import React from "react";
import "../Styles/Login.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email === "") {
        errors.email = "please Enter Your email";
      }
      if (values.password === "") {
        errors.password = "please Enter your password";
      }

      return errors;
    },
    onSubmit: async (values) => {
      //     const loginData = await axios.post(`https://recipebook-server-5jn5.onrender.com/register`,values);
      // console.log(loginData)
    },
  });
  return (
    <form className="sign-In-Form" onSubmit={formik.handleSubmit}>
      <h1 className="sign-In-header">SIGN IN</h1>
      <div className="sign-In-Form-Fields">
        <label className="sign-label-email">Email</label>
        <input
          type="email"
          placeholder="enter email"
          className="sign-input"
          name="email"
          value={formik.values.password}
          onChange={formik.handleChange}
          errors
          required
        />
        <label className="sign-label-email">Password</label>
        <input
          type="password"
          placeholder="enter password"
          className="sign-input"
          name="password"
          value={formik.values.password}
          errors
          onChange={formik.handleChange}
          required
        />
        <button type="submit" className="SIGN-bTN">
          SIGN IN
        </button>
        <label className="sign-label-email">
          New Customer?<Link to='/register' className="sign-In-reg">Register</Link>
        </label>
      </div>
    </form>
  );
};

export default Login;
