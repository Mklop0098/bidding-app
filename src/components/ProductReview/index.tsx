
import { useState, useEffect } from 'react'
import { CountDownt } from '../CountDown'
import { Product as product } from '../../types'
import './style.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import moment from 'moment';
import { useProductContext } from '../../Context/products/product.context';
import { DeleteProduct } from '../../Context/products/product.action';


type Data = {
    data: product
}

export const ProductReview: React.FC<Data> = (props) => {
    const { data } = props;

    const { productState, productDispatch } = useProductContext();

    const handleDelete = () => {
        productDispatch(DeleteProduct(data.id))
    }

    return (
        <div className='product'>
            <div className='product-container'>
                <div className='product-img' style={{
                    background: `url("${data.thumbnail}") center center no-repeat`,
                    backgroundSize: "cover"
                }}></div>
                <h4>{data.name}</h4>
                <p>{data.detail}</p>
                <div className='controler'>
                    <Link to={`/user/bid/${data.name}`}><button>Đấu giá</button></Link>
                    <Link to={`/user/sell/${data.name}`}><button>Bán</button></Link>
                    <button onClick={handleDelete}>Xóa</button>

                </div>
            </div>
        </div>
    )
}