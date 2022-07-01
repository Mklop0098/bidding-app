import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/types";
import { UserProductContext } from "./Context";
import { AddProducts } from "./pages/AddProducts";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { His, ProductPage } from "./pages/ProductPage";

function App() {
  const [userProducts, setUserProducts] = useState<Products[]>([])
  const [yourCart, setYourCard] = useState<His[]>([])


  const setData = (data: Products) => {
    setUserProducts([data,...userProducts])
  }
  const setCard = (data: His) => {
    setYourCard([data,...yourCart])
  }

  console.log(yourCart)

  return (
  <UserProductContext.Provider value={{userProduct: userProducts, addUserProduct: setData, cart: yourCart, addToCart: setCard}}>
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home/user" element={<HomePage />}></Route>
            <Route path="/home/hotitems" element={<HomePage />}></Route>
            <Route path="/home/hotnews" element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductPage/>}></Route>
            <Route path="/user/products" element={<AddProducts/>}></Route>
            <Route path="/cart/username" element={<CartPage/>}></Route>
          </Routes>
          <Footer/>
        </Router>

      </div>
  </UserProductContext.Provider>
  );
}

export default App;
