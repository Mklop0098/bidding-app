import './style.css';
import { Link } from "react-router-dom";
import { Product } from '../../components/Product';
import { homeLink } from '../../data/header';
import { useUserContext } from '../../Context/user/user.context';
import { useProductContext } from '../../Context/products/product.context';
import { useState } from 'react';

export const HomePage = () => {

    const { state, dispatch } = useUserContext();
    const { productState, productDispatch } = useProductContext();
    console.log(productState)

    const Stooges = {
        bidding: "bidding",
        selling: "selling",
        finish: "finish"
    };

    const [action, setAction] = useState(Stooges.selling)

    console.log(action)

    return (
        <div className='homepage'>
            <div className='container'>
                <div className='homepage-container'>
                    <div className='homepage-menu'>

                        <h4 onClick={() => setAction(Stooges.bidding)} className={`${action === Stooges.bidding && "active"}`}>Đang đấu giá</h4>
                        <h4 onClick={() => setAction(Stooges.selling)} className={`${action === Stooges.selling && "active"}`}>Đang bán</h4>
                    </div>
                </div>
                <div className='content-container'>

                    {
                        action === Stooges.bidding ?
                            productState.products.filter(product => product.state === Stooges.bidding).map(product => (
                                <Product data={product} />
                            )) :

                            action === Stooges.selling &&
                            productState.products.filter(product => product.state === Stooges.selling).map(product => (
                                <Product data={product} />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}