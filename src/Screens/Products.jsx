import React, { useState } from 'react'
import img1 from '../imgs/jackie.jpg'
import img2 from '../imgs/julie.jpg'
import img4 from '../imgs/hermoyini.jpg'
import img5 from '../imgs/wallter.jpg'
import img3 from '../imgs/harrypotter.jpg'
import'../Styles/Product.css'
import { data } from './db'
const Products = () => {
const [Products,setProduct] =useState(data)
  return (
    <div className='product-container'>
     {data.map((item)=>(
      <div className='product-flex-div'>
        <img src={item.productImg} alt="jackie" className='product-img'/>
        <h3>{item.productName}</h3>
        <span>{item.productRating}</span>
        <label>{item.productPrice}</label>
      
      </div>
     ))}
      </div>
    
  )
}

export default Products
