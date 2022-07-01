import { Moment } from "moment"

export type ResponseData<T> = {
    code: number,
    message?: string,
    data?: T
}

export type Products = {
    thumbnail: string,
    name: string,
    detail: string,
    price: string,
    id: string,
    startTime?: Moment,
    isInBidSession?: boolean
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

