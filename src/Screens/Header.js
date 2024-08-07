import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleLetterB } from "react-icons/tb";
import { TbCircleLetterO } from "react-icons/tb";
import'../Styles/Header.css'
import { IconContext } from 'react-icons';
import { FaCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
  return (
    <div className='nav-main-div'>
         {/* <IconContext.Provider
      value={{  size: '17px' ,marginTop:"5px"}}
    > */}
        <p className='nav-head-p'>BINGO SHOP</p>
        {/* </IconContext.Provider> */}
        <div className='nav-sub-div'>
        <FaShoppingCart />
<label className='label-cart-nav'>CART</label>
<FaCircleUser />
<label className='label-cart-nav'>SIGNIN</label>
        </div>
      
    </div>
  )
}

export default Header
