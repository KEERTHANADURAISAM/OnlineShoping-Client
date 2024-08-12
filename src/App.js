import { Route, Routes } from "react-router-dom";
import CheckOut from "./Screens/CheckOut";
import Header from "./Screens/Header";
import Loader from "./Screens/Loader";
import Login from "./Screens/Login";
import Payment from "./Screens/Payment";
import ProductDetails from "./Screens/ProductDetails";
import Products from "./Screens/Products";
import Register from "./Screens/Register";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import ShippingCart from "./Screens/ShippingCart";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/product/:id" element={<ProductDetails/>}/>
<Route path="/product/:id" element={<ShippingCart/>}/>
<Route path="/profile" element={<CheckOut/>}/>
<Route path="/payment" element={<Payment/>}/>
<Route path="/cart" element={<Cart/>}/>
</Routes>
</div>
  );
}

export default App;
