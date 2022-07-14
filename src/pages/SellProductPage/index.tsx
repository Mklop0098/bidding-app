import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/product';
import { ShowInformation } from '../../components/ShowInformation';
import { useProductContext } from '../../Context/products/product.context';
import { Product } from '../../types';
import './style.css'



export const SellProductPage = () => {

    const match = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product>({} as Product);
    const { productState, productDispatch } = useProductContext();
    useEffect(() => {
        const response = getProductById(productState, match.id);
        if (response.code === 404) {
            throw new Error(response.message);
        }
        else if (response.data)
            setProduct(response.data);
    }, [match.id]);

    console.log(productState)

    return (
        <div className='sellProductPage'>
            <div className='container'>
                <div className='sellProductPage-container'>
                    <div className='sellProductPage-content'>
                        <div className='content__thumbnails'>
                            <img src={product.thumbnail} alt="" />
                        </div>
                        <div className='content__sell'>
                            <h1 className='product-name'>{product.name}</h1>
                            <div className='product__input'>
                                <ShowInformation isDisable={true} title={'Giá tiền'} content={String(product.price)} />
                                <ShowInformation isDisable={true} title={'Đơn vị'} content={product.moneyType} />
                                <ShowInformation isDisable={true} title={'Số lượng'} content={String(product.quantity)} />
                            </div>
                            <button className='content-btn'>Xác nhận mua</button>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}