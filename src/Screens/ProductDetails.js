import React, { useEffect, useState } from "react";
import "../Styles/ProductDetails.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    viewProduct();
  }, []);

  const viewProduct = async () => {
    try {
      const getProduct = await axios.get(
        `http://localhost:3008/api/products/${params.id}`
       
      );
     
      setProduct(getProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail-pro-grid">
      <div>
        <div className="img-flex">
          <div className="go-back-div">
            <label>
              {" "}
              <FaArrowLeft />
            </label>
            <Link to='/' className="rating-p-tag">Go Back</Link>
          </div>
        </div>
        <div className="product-img-div">
          <img src={product.image} alt={product.name} className="img-pro" />
        </div>
      </div>
      <div className="detail-div">
        <h3 className="h1-pro-head">{product.name}</h3>
        <hr className="hr-line"></hr>
        <p className="rating-p-tag">⭐⭐⭐⭐{product.numReviews} Reviews</p>
        <hr className="hr-line"></hr>
        <p className="rating-p-tag">Price :${product.price}</p>
        <hr className="hr-line"></hr>
        <p className="pro-details-p-tag">
         {product.description}
        </p>
        <hr className="hr-line"></hr>
      </div>
      <div className="cart-status-div">
        <div className="status-p-tag">
          <p>Status:{product.status}</p>
          <p>In Stock {product.countInStock}</p>
        </div>
        <div className="cart-count-div">
          <label for="itemsCount">Qty{product.qty}</label>
          <select
            name="itemsCount"
            id="itemsCount"
            className="cart-qty-slect-tag"
          >
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
        <div className="cart-add-btn-div">
          <Link to='/payment'
           className="cart-add-btn">ADD TO CART</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
