import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../cart/Cart";
import Product from "../product/Product";

const AllRoutes = ({ productItems,cartItems,handleAddProduct }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product productItems={productItems} handleAddProduct={handleAddProduct}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
