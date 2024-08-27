import "../Styles/Product.css";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  // console.log(products)
  return (
    <div className="product-flex-div">
      <img src={products.image} alt="jackie" className="product-img" />
      <div className="product-style-font">
      <Link to={`/product/${products._id}`} className="product-name-head">
        {products.name}
      </Link>
      <label className="product-name-head-label">
        ⭐⭐⭐⭐{`${products.numReviews}reviews`}
      </label>
      <label className="product-name-head-label">${products.price}</label>
      </div>
    </div>
  );
};

export default Products;
