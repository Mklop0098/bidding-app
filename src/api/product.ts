
import { Products, ResponseData } from "../components/types";
import { listProduct } from "../data/header";


export const getProductById = (id?: string): ResponseData<Products> => {
    const product = listProduct.find(i => i.id === id);
    if (!product) { 
        return {
            code: 401,
            message: "Product not found",
        }
    }
    else return {
        code: 200,
        data: product
    }
}