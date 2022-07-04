
import moment from "moment";
import { Products } from "../../types";
import { ProductAction } from "./product.action";
import { ProductConst } from "./product.const";


export const productReducer = (state: Products, action: ProductAction): Products => {
    switch (action.type) {
        case ProductConst.SET_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload.product]
            }
        }
        case ProductConst.DELETE_PRODUCT: {
            return {
                products: state.products.filter(id => id.id != action.payload.id)
            }
        }
        case ProductConst.START_BIDDING: {
            const product = state.products.find(product => product.id === action.payload.id)
            if (product) {
                product.startTime = moment()
                product.price = action.payload.price
                product.alpha = action.payload.alpha
                product.state = "bidding"
                product.biddingTime = action.payload.time
                return { products: [...state.products] }
            }
            else return state
        }

        case ProductConst.START_SELLING: {
            const product = state.products.find(product => product.id === action.payload.id)
            if (product) {
                product.price = action.payload.price
                product.state = "selling"
                return { products: [...state.products] }
            }
            else return state
        }

        default:
            return state;
    }
}