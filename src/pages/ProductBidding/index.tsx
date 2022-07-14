import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/product";
import { StartBidding } from "../../Context/products/product.action";
import { useProductContext } from "../../Context/products/product.context";
import { Product } from "../../types";
import './style.css'

export const ProductBidding = () => {

    const match = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product>({} as Product);
    const { productState, productDispatch } = useProductContext();
    const [price, setPrice] = useState(1)
    const [alpha, setAlpha] = useState(1)
    const [time, setTime] = useState(1)


    useEffect(() => {
        const response = getProductById(productState, match.id);
        if (response.code === 404) {
            throw new Error(response.message);
        }
        else if (response.data)
            setProduct(response.data);
    }, [match.id]);
    console.log(product)

    const handleClick = () => {
        productDispatch(StartBidding(product.id, price, alpha, time))
    }

    console.log(productState)
    return (
        <div className="productsell">
            <div className="container">
                <div className="sell-container">
                    <div className="sell-header"><h1>Đấu giá sản phẩm</h1></div>

                    <div className="sell-content">
                        <div className="product-thumbnail">
                            <img src={product?.thumbnail} alt="" />
                        </div>
                        <div className="sell-option">
                            <div className='content-item' >
                                <p>Giá khởi điểm</p>
                                <input type="number" onChange={e => setPrice(Number(e.target.value) > 0 ? Number(e.target.value) : 0)} value={price > 1 ? price : 1} />
                            </div>
                            <div className='content-item' >
                                <p>Bước nhảy giá</p>
                                <input type="number" onChange={e => setAlpha(Number(e.target.value) > 0 ? Number(e.target.value) : 0)} value={alpha > 1 ? alpha : 1} />
                            </div>
                            <div className='content-item' >
                                <p>Thời gian một phiên</p>
                                <input type="number" onChange={e => setTime(Number(e.target.value) > 0 ? Number(e.target.value) : 0)} value={time > 1 ? time : 1} />
                            </div>
                            <div className='content-item' >
                                <p>Loại tiền tệ</p>
                                <select>
                                    <option>VND</option>
                                    <option>USD</option>

                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="sell-footer"><button onClick={handleClick}>Confirm</button></div>


                </div>
            </div>

        </div>
    )
} 