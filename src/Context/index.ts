import React, { useState } from "react";
import { Products } from "../types";
import { UserProduct, YourCart } from "../data/header";
import { His } from "../pages/ProductPage";

export const UserProductContext = React.createContext({
    userProduct: UserProduct,
    addUserProduct: (data: Products) => { },
    cart: YourCart,
    addToCart: (data: His) => { },
    user: "",
    setUser: (user: string) => { }
})