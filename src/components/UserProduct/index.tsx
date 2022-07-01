
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import moment from 'moment';
import { Products } from "../types";
import { listProduct } from "../../data/header";
import './style.css'

type Data = {
    data: Products
}



export const UserProducts:React.FC<Data> = (props) => {
    const {data} = props;
    const handleClick = () => {
        const tmp = {
            thumbnail: data.thumbnail,
            name: data.name,
            detail: data.detail,
            price: data.price,
            id: data.name,
            startTime: moment(),
        }
        alert("Đăng thành công")
        listProduct.push(tmp)

    }
    
    return (
            <div className='product'>
                <div className='product-container'>
                    <div className='product-img' style={{background: `url("${data.thumbnail}") center center no-repeat`, backgroundSize: "cover"}}>
                    </div>
                    <h4>{data.name}</h4>
                    <p>{data.detail}</p>
                    <div className='product-time'>
                        <button onClick={handleClick}>Đấu giá</button>
                        <p style={{fontWeight: "500"}}>{data.price}</p>
                    </div>
                </div>
            </div>
    )
}