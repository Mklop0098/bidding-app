
import { useState, useEffect } from 'react'
import { CountDownt } from '../CountDown'
import { Product as product } from '../../types'
import './style.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import moment from 'moment';


type Data = {
    data: product
}

// thoi gian 1 phien dau gia la 5 phut

export const Product: React.FC<Data> = (props) => {
    const { data } = props;

    return (
        <Link to={`/product/${data.name}`} style={{ textDecoration: "none", color: "black" }}>
            <div className='storage-product'>
                <div className='product_thumnail' style={{
                    background: `url("${data.thumbnail}") center center no-repeat`,
                    backgroundSize: "cover"
                }}>

                </div>
                <div className='product-content'>
                    <h4>{data.name}</h4>
                    <p style={{ padding: "10px 0" }}>{data.detail}</p>
                    <p>Số lượng còn lại: {data.quantity}</p>
                </div>
                <div className='product-time'>
                    {
                        data.state === "selling" ? <p>For Sale</p> :
                            <CountDownt endTime={data.startTime?.clone().add(data.biddingTime, "minutes") ?? moment()} />
                    }
                    <p style={{ fontWeight: "500" }}>{data.price} {data.moneyType}</p>

                </div>
            </div >
        </Link>
    )
}