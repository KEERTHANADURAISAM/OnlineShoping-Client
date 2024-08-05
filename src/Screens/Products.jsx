import React from 'react'
import jackie from '../imgs/jackie.jpg'
import'../Styles/Product.css'
const Products = () => {
  return (
    <div className='product-container'>
      <div className='product-flex-div'>
        <img src={jackie} alt="jackie" className='product-img'/>
        <h3>Jackie Chan</h3>
        <span>⭐⭐⭐⭐12 Reviews</span>
        <label>$5</label>
      </div>
      <div className='product-flex-div'>
        <img src={jackie} alt="jackie" className='product-img'/>
        <h3>Jackie Chan</h3>
        <span>⭐⭐⭐⭐12 Reviews</span>
        <label>$5</label>
      </div>
      <div className='product-flex-div'>
        <img src={jackie} alt="jackie" className='product-img'/>
        <h3>Jackie Chan</h3>
        <span>⭐⭐⭐⭐12 Reviews</span>
        <label>$5</label>
      </div>
      <div className='product-flex-div'>
        <img src={jackie} alt="jackie" className='product-img'/>
        <h3>Jackie Chan</h3>
        <span>⭐⭐⭐⭐12 Reviews</span>
        <label>$5</label>
      </div>
    </div>
  )
}

export default Products
