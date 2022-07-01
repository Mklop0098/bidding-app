

import moment from "moment"
import { Home, Products } from "../components/types"
import { His } from "../pages/ProductPage"

export const upheader = [
    "CHÍNH SÁCH ĐỔI TRẢ 30 NGÀY",
    "PHÍ GIAO HÀNG : ₫ 49000",
    "TẤT CẢ SẢN PHẨM BẮT ĐẦU TỪ ₫ 1000",
    "LIÊN HỆ : SUPPORT.VN@CHILINDO.COM",
]

export const downheader = [
    {   
        name: "Sản phẩm của tôi",
        link: "/user/products"
    },
    {
        name: "Đấu giá của tôi",
        link: "/"
    },
    {
        name: "Giỏ hàng",
        link: "/cart/username"
    },
    {
        name: "Chào",
        link: "/"
    }
]



export const homeLink: Home[] = [
    {
        id: "stopnow",
        title: "Kết thúc ngay",
        link: "/home/user"
    },
    {
        id: "hotitems",
        title: "Sản phẩm bán chạy",
        link: "/home/hotitems"
    },    
    {
        id: "hotnews",
        title: "Sản phẩm mới",
        link: "/home/hotnews"
    },
]

export const listProduct:Products[] = [
    {
        thumbnail: "https://cdn.chilindo.com//XML/Gfx/13-969/13-969-Presell-001_380.jpg",
        name: "Bóng đèn USB",
        detail: "Bóng đèn USB",
        price: "2000 đ",
        id: "BóngđènUSB",
        startTime: moment().subtract(4, "minute").subtract(50, "second"),


    },
    {
        thumbnail: "https://cdn.chilindo.com//XML/Gfx/21-078/21-078-Presell-1_380.jpg",
        name: "Automatic Disinfection Sprayer",
        detail: "Automatic Disinfection Sprayer",
        price: "2000 đ",
        id: "AutomaticDisinfectionSprayer",
        startTime: moment().subtract(4, "minute").subtract(40, "second"),

    },
    {
        thumbnail: "https://cdn.chilindo.com//XML/Gfx/00-059/00-059-0_164.jpg",
        name: "Móc chìa khóa USB sạc cho micro",
        detail: "Móc chìa khóa USB sạc cho micro",
        price: "2000 đ",
        id: "MócchìakhóaUSBsạcchomicro"
    },
    {
        thumbnail: "https://cdn.chilindo.com//XML/Gfx/02-878/02-878_0_164.jpg",
        name: "Bóng đèn USB",
        detail: "Bóng đèn USB",
        price: "2000 đ",
        id: ""
    },
    {
        thumbnail: "https://cdn.chilindo.com//XML/Gfx/02-878/02-878_0_164.jpg",
        name: "Bóng đèn USB",
        detail: "Bóng đèn USB",
        price: "2000 đ",
        id: ""
    },
    {
        thumbnail: "https://cdn.chilindo.com//XML/Gfx/02-878/02-878_0_164.jpg",
        name: "Bóng đèn USB",
        detail: "Bóng đèn USB",
        price: "2000 đ",
        id: ""
    },

    
]


export const quest = [
    {
        quest: "Khi nào tôi nhận được hàng?",
        answer: "Trong vòng 1-3 ngày làm việc"
    },
    {
        quest: "Điều khoản hoàn trả của Chilindo là gì?",
        answer: "Nếu bạn không hài lòng với kiện hàng, bạn có thể hoàn lại trong vòng 30 ngày"
    },
    {
        quest: "Thay đổi đơn hàng?",
        answer: "(028)-36222111"
    },

]
export const UserProduct:Products[] = [

]
export const YourCart:His[] = [

]

export const question = [
    {
        quest: "Khi nào tôi nhận được hàng?",
        answer: "Trong vòng 1-3 ngày làm việc"
    },
    {
        quest: "Điều khoản hoàn trả của Chilindo là gì?",
        answer: "Nếu bạn không hài lòng với kiện hàng, bạn có thể hoàn lại trong vòng 30 ngày"
    },
    {
        quest: "Thay đổi đơn hàng?",
        answer: "(028)-36222111"
    },

]