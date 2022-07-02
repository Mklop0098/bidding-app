import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./types";
import { AddProducts } from "./pages/AddProducts";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { His, ProductPage } from "./pages/ProductPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useUserContext } from "./Context/user/user.context";
import { HomeUserPage } from "./pages/HomeUserPage";


function App() {
  const { state: userState } = useUserContext();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home/user" element={<HomePage />}></Route>
        <Route path="/home/hotitems" element={<HomePage />}></Route>
        <Route path="/home/hotnews" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route element={<ProtectedRoute isAllowed={!!userState.id} />}>
          <Route path="/user/products" element={<AddProducts />} />
          <Route path="/user/homeuser" element={<HomeUserPage />} />

        </Route>
        <Route path="/cart/username" element={<CartPage />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
