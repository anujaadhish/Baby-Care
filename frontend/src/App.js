import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AddProducts from "./Components/AddProducts/AddProducts";
import Products from "./Components/Products/Products";
import Delete from "./Components/Delete/Delete";
import EditProducts from "./Components/EditProducts/EditProducts";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SingleProducts from "./Components/Singleproducts/Singleproducts";
import ProductList from "./Components/ProductList/ProductList";
import Profile from "./Components/Profile/Profile";
import Profileedit from "./Components/ProfileEdit/Profileedit";
import Cart from "./Components/Cart/Cart";
import WishList from "./Components/WishList/WishList";
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {
  return (
    <div>
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddProducts" element={<AddProducts />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Delete/:id" element={<Delete />} />
            <Route path="/EditProducts/:id" element={<EditProducts />} />
            <Route path="/Singleproducts/:id" element={<SingleProducts />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Profileedit/:id" element={<Profileedit />} />
            <Route path="/Cart" element={<Cart  />} />
            <Route path="/WishList" element={<WishList/>}/>
            <Route path="/Checkout" element={<CheckOut/>}/>

          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
