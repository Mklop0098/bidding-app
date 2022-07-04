
import { Product, Products, ResponseData } from "../types";


export const getProductById = (state: Products, id?: string): ResponseData<Product> => {
    const product = state.products.find(data => data.name === id);
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