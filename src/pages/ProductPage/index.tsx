import { useEffect, useState } from 'react';
import { getProductById } from '../../api/product';
import { useParams } from "react-router-dom";
import './style.css'
import { CountDownt } from '../../components/CountDown';
import moment from 'moment';
import { Products } from '../../types';

export type His = {
    gia: number,
    soluong: number,
    ngaygio: string
    ten: string
}

export const ProductPage: React.FC = () => {

    const [value, setValue] = useState(1000)
    const [currprice, setCurr] = useState(0)
    const [history, setHis] = useState<His[]>([])
    const [ctrl, setCtrl] = useState("Hiển thị thêm")
    const match = useParams<{ id: string }>();

    const [product, setProduct] = useState<Products>();

    useEffect(() => {
        const response = getProductById(match.id);
        if (response.code === 404) {
            throw new Error(response.message);
        }
        setProduct(response.data);
    }, [match.id]);


    const handleDown = () => {
        if (value > 5000) {
            setValue(value - 5000)
        }
    }
    const handleUp = () => {
        setValue(value + 5000)
    }

    const handleClick = () => {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        if (currprice < value) {
            setCurr(value)
        }

        let name
        if (product?.name === undefined) {
            name = ""
        }
        else {
            name = product.name
        }

        let tmp = {
            gia: value,
            soluong: 1,
            ngaygio: time,
            ten: name
        }

        setHis([tmp, ...history])
    }

    const handleCtrl = () => {
        if (ctrl === "Hiển thị thêm") {
            setCtrl("Rút gọn")
        }
        else {
            setCtrl("Hiển thị thêm")
        }
    }

    const handleTimesUp = (func: (data: His) => void) => {
        alert("Het gio")
        func(history[0])

    }

    return (
        <div className='productpage'>
            <div className='container'>
                <div className='productpage-container'>
                    <div className='carousel-menu'>
                        <div className='product_carousel'>
                            <img src={product?.thumbnail} alt="" />
                        </div>
                        <div className='product_menu'>
                            <h1>{product?.name}</h1>
                            <div className='timedown'>
                                {/* {product && <CountDownt endTime={product.startTime?.clone().add(5 * 60, "seconds") ?? moment()} onCounterEnd={() => handleTimesUp(data.addToCart)} />} */}
                            </div>
                            <p style={{ color: "black", fontSize: "12px" }}>GIÁ THẦU HIỆN TẠI:</p>
                            <p> ₫ {currprice}</p>
                            <p style={{ color: "black", fontSize: "12px" }}>ĐẤU GIÁ NGAY:</p>
                            <div className='price'>
                                <div className='setprice'>
                                    <button onClick={handleDown}>-</button>
                                    <input type="text" value={value} onChange={e => setValue(Number(e.target.value))} />
                                    <button onClick={handleUp}>+</button>
                                </div>
                                <div className='choose'>
                                    <button onClick={handleClick}>Đặt giá thầu</button>
                                </div>

                            </div>
                        </div>
                        <div className='right-policy'>
                            <p>Chính sách đổi trả 30 ngày</p>
                            <p>Phí giao hàng : ₫ 49000</p>
                            <p>TẤT CẢ SẢN PHẨM BẮT ĐẦU TỪ ₫ 1000</p>
                            <p>(028)-36222111</p>
                        </div>
                    </div>
                    <div className={`history ${history.length < 1 && "hidden"}`}>
                        <p className='head'>Giá</p>
                        <p className='head'>Số lượng</p>
                        <p className='head'>Ngày giờ</p>
                    </div>
                    <div className={`${ctrl === "Hiển thị thêm" && "history-container"}`}>
                        {history.map(data => (
                            <div className={`history ${history.length < 1 && "hidden"}`}>

                                <p>{data.gia}</p>
                                <p>{data.soluong}</p>
                                <p>{data.ngaygio}</p>
                            </div>

                        ))}
                    </div>
                    <p className={`${history.length < 6 && "hidden"} `} onClick={handleCtrl}>{ctrl}</p>
                </div>
            </div>
        </div>
    )
}