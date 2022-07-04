
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
        <Link to={`/product/${data.id}`} style={{ textDecoration: "none", color: "black" }}>
            <div className='product'>
                <div className='product-container'>
                    <div className='product-img' style={{
                        background: `url("${data.thumbnail}") center center no-repeat`,
                        backgroundSize: "cover"
                    }}></div>
                    <h4>{data.name}</h4>
                    <p>{data.detail}</p>
                    <div className='product-time'>
                        {
                            data.state === "selling" ? <p>For Sale</p> :
                                <CountDownt endTime={data.startTime?.clone().add(data.biddingTime, "minutes") ?? moment()} />
                        }
                        <p style={{ fontWeight: "500" }}>{data.price} đ</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}