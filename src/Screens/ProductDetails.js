import React from 'react'
import'../Styles/ProductDetails.css'
import productImg from '../imgs/wallter.jpg'
import { FaArrowLeft } from 'react-icons/fa6'
const ProductDetails = () => {
  return (
    <div className='detail-pro-grid'>
        <div>
      <div className='img-flex'>
        <div className='go-back-div'>
            <label> <FaArrowLeft/></label>
        <label>Go Back</label>
        </div>
      </div>
      <div className='product-img-div'>
      <img src={productImg} alt="" className='img-pro'/>
      </div>
      </div>
      <div className='detail-div'>
        <h1 className='h1-pro-head'>Logitech G-Series Gaming Mouse</h1>
        <hr className='hr-line'></hr>
        <p>⭐⭐⭐⭐12 Reviews</p>
        <hr className='hr-line'></hr>
        <p>Price : $49.99</p>
        <hr className='hr-line'></hr>
        <p>Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience</p>
        <hr className='hr-line'></hr>
      </div>
      <div className='cart-status-div'>
        <div className='status-p-tag'>
<p>Status:</p>
<p>In Stock</p>
      </div>
      <div className='cart-count-div'>
     <label for="itemsCount">Qty</label>
     <select name="itemsCount" id="itemsCount" className='cart-qty-slect-tag'>
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
</div>
<div className='cart-add-btn-div'>
<button className='cart-add-btn'>ADD TO CART</button>
</div>
     </div>
    </div>
  )
}

export default ProductDetails
