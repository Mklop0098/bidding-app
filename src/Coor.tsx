import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./types";
import { UserProductContext } from "./Context";
import { His, ProductPage } from "./pages/ProductPage";
import App from "./App";
import { LoginPage } from "./pages/LoginPage";
import { SignInPage } from "./pages/SignInPage";

function Coor() {
    const [userProducts, setUserProducts] = useState<Products[]>([])
    const [yourCart, setYourCard] = useState<His[]>([])
    const [user, setUser] = useState("")


    const setData = (data: Products) => {
        setUserProducts([data, ...userProducts])
    }
    const setCard = (data: His) => {
        setYourCard([data, ...yourCart])
    }

    const setUserName = (user: string) => {
        setUser(user)
    }

    return (
        <UserProductContext.Provider value={{ userProduct: userProducts, addUserProduct: setData, cart: yourCart, addToCart: setCard, user, setUser: setUserName }}>
            <div className="App">
                <Routes>
                    <Route path="/web/login" element={<LoginPage />}></Route>
                    <Route path="/web/signin" element={<SignInPage />}></Route>
                    <Route path="*" element={<App />}></Route>
                </Routes>

            </div>
        </UserProductContext.Provider>
    );
}

export default Coor;
