import React from "react";
import "../Styles/Header.css";
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav-main-div">
      <Link to="/" className="nav-head-p">
        BINGO SHOP
      </Link>
      <div className="nav-sub-div">
        <FaShoppingCart />
        <Link to="/cart" className="label-cart-nav">
          CART
        </Link>
        <FaCircleUser />
        <Link to="/login" className="label-cart-nav">
          SIGNIN
        </Link>
      </div>
    </div>
  );
};

export default Header;
