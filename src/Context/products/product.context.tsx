import moment from "moment"
import { createContext, Dispatch, useContext, useReducer } from "react"
import { Products } from "../../types"
import { ProductAction } from "./product.action"
import { productReducer } from "./product.reducer"

type ProductContextType = {
    productState: Products,
    productDispatch: Dispatch<ProductAction>
}


const initialState: Products = {
    products: []
}


export const ProductContext = createContext<ProductContextType>({ productState: initialState } as ProductContextType);

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = (props: any) => {

    const [productState, productDispatch] = useReducer(productReducer, initialState);


    return <ProductContext.Provider value={{ productState, productDispatch }}>
        {props.children}
    </ProductContext.Provider>



}