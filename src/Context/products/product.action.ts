
import Moment from "react-moment";
import { Product } from "../../types";
import { typedAction } from "../typed";
import { ProductConst } from "./product.const";


export const SetProduct = (newproduct: Product) => {
    return typedAction(ProductConst.SET_PRODUCT, { product: newproduct })
}

export const DeleteProduct = (id: number) => {
    return typedAction(ProductConst.DELETE_PRODUCT, { id })
}

export const StartBidding = (id: number, price: number, alpha: number, time: number) => {
    return typedAction(ProductConst.START_BIDDING, { id, price, alpha, time })
}

export const StartSelling = (id: number, price: number) => {
    return typedAction(ProductConst.START_SELLING, { id, price })
}

export type ProductAction = ReturnType<
    typeof SetProduct |
    typeof DeleteProduct |
    typeof StartBidding |
    typeof StartSelling
>