
import { Moment } from "moment"
import { Product } from "./components/Product"

export type ResponseData<T> = {
    code: number,
    message?: string,
    data?: T
}

export type Product = {
    thumbnail: string,
    name: string,
    detail: string,
    price: number,
    id: number,
    startTime?: Moment,
    isInBidSession?: boolean,
    belongTo: string,
    state: string,
    quantity: number,
    alpha: number,
    biddingTime: number,
    moneyType: string
}

export type Products = {
    products: Product[]
}

export type Home = {
    id: string,
    title: string,
    link: string
}

export type Cart = {
    name: string,
    quantity: number,
    price: number
}

export type UserData = {
    id: string,
    name: string,
    address: string,
    phone: string,
    username: string,
    [key: string]: any
}

export type UserLogin = {
    name: string,
    password: string
}