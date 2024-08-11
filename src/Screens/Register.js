import React from "react";
import "../Styles/Register.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpwd: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "please Enter Your name";
      }
      if (values.email === "") {
        errors.email = "please Enter Your email";
      }
      if (values.password === "") {
        errors.password = "please Enter your password";
      }
      if (values.confirmpwd === "") {
        errors.password = "please Enter your correct password";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values)
          const loginData = await axios.post(`http://localhost:3008/api/register`,values);
      console.log(loginData)
      localStorage.setItem("")
    },
  });
  return (
    <form className="sign-In-Form" onSubmit={formik.handleSubmit}>
      <h1 className="sign-In-header">REGISTER</h1>
      <div className="sign-In-Form-Fields">
        <label className="sign-label-email">Name</label>
        <input
          type="text"
          placeholder="enter Name"
          className="sign-input"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.name}</span>
        <label className="sign-label-email">Email</label>
        <input
          type="email"
          placeholder="enter email"
          className="sign-input"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.email}</span>
        <label className="sign-label-email">Password</label>
        <input
          type="password"
          placeholder="enter password"
          className="sign-input"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.password}</span>
        <label className="sign-label-email">Confirm Password</label>
        <input
          type="password"
          placeholder="enter password"
          className="sign-input"
          name="confirmpwd"
          value={formik.values.confirmpwd}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.confirmpwd}</span>
        <br></br>
        {/* <Link to=''> */}
        <button type="submit" className="SIGN-bTN"  disabled={!formik.isValid}>
          SIGN IN
        </button>
        {/* </Link> */}
        <label className="sign-label-email">
          Have an account!<span className="sign-In-reg"><Link to='/login'>Login</Link></span>
        </label>
      </div>
    </form>
  );
};

export default Register;
