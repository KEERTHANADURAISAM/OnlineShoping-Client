import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Products from './Products';
import Loader from './Loader';

const Home = () => { 


// useEfect to load data

useEffect(() => {
  getAllProducts();
  }, []);

const [products,setProducts] = useState([]);

const  getAllProducts = async()=>{
const getProducts = await axios.get("http://localhost:3008/api/products")
console.log(getProducts)
setProducts(getProducts.data)
console.log(setProducts)
}


  return (
    <div>
     
     {products && Array.isArray(products) && products.length > 0 ? (
  products.map((item) => (
    
    <Products key={item._id} products={products} />
  ))
) : (
  <Loader/>  // Or any other placeholder content
)}
    </div>
  )
}

export default Home
