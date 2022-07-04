

import moment from "moment"
import { Home } from "../types"
import { His } from "../pages/ProductPage"

export const upheader = [
    "CHÍNH SÁCH ĐỔI TRẢ 30 NGÀY",
    "PHÍ GIAO HÀNG : ₫ 49000",
    "TẤT CẢ SẢN PHẨM BẮT ĐẦU TỪ ₫ 1000",
    "LIÊN HỆ : SUPPORT.VN@CHILINDO.COM",
]

export const downheader = [
    {
        name: "Thêm sản phẩm",
        link: "/user/products"
    },
    {
        name: "Giỏ hàng",
        link: "/cart/username"
    },
    {
        name: "Sản phẩm của tôi",
        link: "/user/storage"
    },
]



export const homeLink: Home[] = [
    {
        id: "stopnow",
        title: "Đang bán",
        link: "/home/user"
    },
    {
        id: "hotitems",
        title: "Đang đấu giá",
        link: "/home/hotitems"
    },
    {
        id: "hotnews",
        title: "Đã kết thúc",
        link: "/home/hotnews"
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