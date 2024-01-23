import React from "react";
import Signup from "../signup/signup";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Signin from "../signin/signin";
import ProductList from "../products/productsList/ProductList";
import AddProduct from "../products/AddProdut/AddProject";
import UpdateProduct from "../updateProduct/UpdateProduct";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/update/:id" element={<UpdateProduct />}></Route>
        <Route path="/navbar" element={<h1>welcom</h1>}></Route>
        <Route path="/" element={<h1>welcom to home page</h1>}></Route>
      </Routes>
    </div>
  );
};
export default Router;
