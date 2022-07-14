import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/product";
import { StartSelling } from "../../Context/products/product.action";
import { useProductContext } from "../../Context/products/product.context";
import { Product } from "../../types";
import './style.css'

export const ProductSell = () => {

    const match = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product>({} as Product);
    const { productState, productDispatch } = useProductContext();
    const [price, setPrice] = useState(1)
    const [moneyType, setMoneyType] = useState("USD")

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
        productDispatch(StartSelling(product.id, price, moneyType))
    }


    console.log(moneyType)
    return (
        <div className="productsell">
            <div className="container">
                <div className="sell-container">
                    <div className="sell-header"><h1>Đăng bán sản phẩm</h1></div>

                    <div className="sell-content">
                        <div className="product-thumbnail">
                            <img src={product?.thumbnail} alt="" />
                        </div>
                        <div className="sell-option">
                            <div className='content-item' >
                                <p>Giá bán</p>
                                <input type="number" onChange={e => setPrice(Number(e.target.value) > 0 ? Number(e.target.value) : 0)} value={price > 0 ? price : 0} />
                            </div>
                            <div className='content-item' >
                                <p>Loại tiền tệ</p>
                                <select onChange={(e) => setMoneyType(e.target.value)} value={moneyType}>
                                    <option value={"VND"}>VND</option>
                                    <option value={"USD"}>USD</option>

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