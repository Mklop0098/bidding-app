import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./types";
import { UserProductContext } from "./Context";
import { AddProducts } from "./pages/AddProducts";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { His, ProductPage } from "./pages/ProductPage";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {
  return (

    <UserProductContext.Consumer>
      {
        user => (
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/home/user" element={<HomePage />}></Route>
              <Route path="/home/hotitems" element={<HomePage />}></Route>
              <Route path="/home/hotnews" element={<HomePage />}></Route>
              <Route path="/product/:id" element={<ProductPage />}></Route>
              <Route element={<ProtectedRoute isAllowed={!!user.user} />}>
                <Route path="/user/products" element={<AddProducts />} />
              </Route>
              <Route path="/cart/username" element={<CartPage />}></Route>
            </Routes>
            <Footer />
          </div>
        )
      }
    </UserProductContext.Consumer>


  );
}

export default App;
