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
    const [price, setPrice] = useState(0)
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
        productDispatch(StartSelling(product.id, price))
    }

    console.log(productState)
    return (
        <div className="productsell">
            <div className="container">
                <div className="sell-container box-shadow">
                    <div className="product-thumbnail">
                        <img src={product?.thumbnail} alt="" />
                    </div>
                    <div className="sell-option">
                        <input type="number" name="" id="" placeholder="Giá bán" onChange={e => setPrice(Number(e.target.value))} />
                        <button onClick={handleClick}>Confirm</button>
                    </div>
                </div>
            </div>

        </div>
    )
} 