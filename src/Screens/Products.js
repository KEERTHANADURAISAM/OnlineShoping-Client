import React, { useState } from 'react'
import img1 from '../imgs/jackie.jpg'
import img2 from '../imgs/julie.jpg'
import img4 from '../imgs/hermoyini.jpg'
import img5 from '../imgs/wallter.jpg'
import img3 from '../imgs/harrypotter.jpg'
import'../Styles/Product.css'

const Products = ({products}) => {
console.log(products)
  return (
    <div className='product-container'>
   
      <div className='product-flex-div'>
        {/* <img src={item.image} alt="jackie" className='product-img'/> */}
        <h3>{products.name}</h3>
        <span>{products.rating}</span>
        <label>{`${products.numReviews}reviews`}</label> 
        <label>${products.price}</label>
      </div>
  
      </div>
    
  )
}

export default Products
