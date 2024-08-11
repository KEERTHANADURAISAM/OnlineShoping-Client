import React from "react";
import "../Styles/CheckOut.css";
import { Formik, useFormik } from "formik";

const CheckOut = () => {
  const formik = useFormik({
    initialValues: {
      Address: "",
      City: "",
      Postalcode: "",
      Country: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.Address === "") {
        errors.Address = "please Enter Your Address";
      }
      if (values.City === "") {
        errors.City = "please Enter Your City";
      }
      if (values.Postalcode === "") {
        errors.Postalcode = "please Enter your PostalCode";
      }
      if (values.Country === "") {
        errors.Country = "please Enter your correct Country";
      }
      return errors;
    },
    onSubmit: async (values) => {
      //     const loginData = await axios.post(`h ttps://recipebook-server-5jn5.onrender.com/register`,values);
      // console.log(loginData)
    },
  });
  return (
    <div className="sign-In-Form" onSubmit={Formik.handleSubmit}>
      <div className="chekout-headers-div">
        <label>SignIn</label>
        <label>Shipping</label>
        <label>Payment</label>
        <label>Place Order</label>
      </div>
      <div className="sign-In-Form-Fields">
        <label className="sign-label-email">Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          className="sign-input"
          value={formik.values.Address}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.Address}</span>
        <label className="sign-label-email">City</label>
        <input
          type="text"
          placeholder="Enter City"
          className="sign-input"
          value={formik.values.City}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.City}</span>
        <label className="sign-label-email">PostalCode</label>
        <input
          type="text"
          placeholder="Enter PostalCode"
          className="sign-input"
          value={formik.values.Postalcode}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.Postalcode}</span>
        <label className="sign-label-email">Country</label>
        <input
          type="text"
          placeholder="Enter Country"
          className="sign-input"
          value={formik.values.Country}
          onChange={formik.handleChange}
          required
        />
        <span style={{ color: "red" }}>{formik.errors.Country}</span>
        <button type="submit" className="SIGN-bTN">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
