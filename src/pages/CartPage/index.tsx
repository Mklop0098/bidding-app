import './style.css'
import { Link } from 'react-router-dom'
import { question } from '../../data/header'

export const CartPage = () => {
    return <div className='cardPage'>
        <div className='container'>
            <div className='cartpage-container'>
                <Link to={'/product/id'} style={{ textDecoration: "none" }}>
                    <h1 style={{ color: "#1ab7ea" }}>Giỏ hàng</h1>
                </Link>

                <div className='cart'>
                    <h4>Giỏ hàng</h4>
                    <div className='cart-container'>
                        {/* {
                            data.cart.length > 0 ? <div>
                                {
                                    data.cart.map(item => (
                                        <div className='cart-item'>
                                            <div className='cart-item__content'>
                                                <p>{item.ten}</p>
                                                <p>Giá: {item.gia}</p>
                                                <p>Số lượng: {item.soluong}</p>
                                            </div>
                                            <div className='cart-item__handle'>
                                                <button>Thanh toán</button>
                                                <button>Hủy</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> : <div><img src="https://www.chilindo.com/assets/svgIcon/notFound.svg" alt="" />
                                <p>Your cart is empty!</p></div>
                        } */}

                    </div>
                </div>
                <div className='contact'>
                    {question.map(item => (
                        <div className='question'>
                            <h4>{item.quest}</h4>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
}