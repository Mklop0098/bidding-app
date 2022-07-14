
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AddProducts } from "./pages/AddProducts";
import { HomePage } from "./pages/HomePage";
import { SellProductPage } from "./pages/SellProductPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useUserContext } from "./Context/user/user.context";
import { HomeUserPage } from "./pages/HomeUserPage";
import { ProductSell } from "./pages/ProductSell";
import { StoragePage } from "./pages/StoragePage";
import { ProductBidding } from "./pages/ProductBidding";


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
        <Route path="/product/:id" element={<SellProductPage />}></Route>
        <Route element={<ProtectedRoute isAllowed={!!userState.id} />}>
          <Route path="/user/products" element={<AddProducts />} />
          <Route path="/user/homeuser" element={<HomeUserPage />} />
          <Route path="/user/storage" element={<StoragePage />} />
          <Route path="/user/sell/:id" element={<ProductSell />} />
          <Route path="/user/bid/:id" element={<ProductBidding />} />


        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
