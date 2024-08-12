import React, { useState } from 'react'
import img1 from '../imgs/jackie.jpg'
import img2 from '../imgs/julie.jpg'
import img4 from '../imgs/hermoyini.jpg'
import img5 from '../imgs/wallter.jpg'
import img3 from '../imgs/harrypotter.jpg'
import'../Styles/Product.css'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
console.log(products)
  return (
    <div className='product-container'>
   
      <div className='product-flex-div'>
        <img src={products.image} alt="jackie" className='product-img'/>
        <div className='product-style-font'></div>
        <Link to='/product/:id' className='product-name-head'>{products.name}</Link>
        <label className='product-name-head'>⭐⭐⭐⭐{`${products.numReviews}reviews`}</label> 
        <label className='product-name-head'>${products.price}</label>
      </div>
  
      </div>
    
  )
}

export default Products
