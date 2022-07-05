import { useState } from 'react'
import { ProductReview } from '../../components/ProductReview'
import { SetProduct } from '../../Context/products/product.action'
import { useProductContext } from '../../Context/products/product.context'
import { useUserContext } from '../../Context/user/user.context'
import { Product as product } from '../../types'
import './style.css'

export const AddProducts = () => {
    const [productInfo, setProductInfo] = useState<product>({} as product)
    const [error, setError] = useState({ productName: "", productQuantity: "", productImage: "", noError: "" })


    const { productState, productDispatch } = useProductContext();
    const { state } = useUserContext();


    const handleChange = (field: string, value: string) => {
        setProductInfo({
            ...productInfo,
            [field]: value,
            "id": productState.products.length + 1
        })

        setError({ productName: "", productQuantity: "", productImage: "", noError: "" })


    }

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProductInfo({ ...productInfo, "thumbnail": (URL.createObjectURL(event.target.files[0])), "id": productState.products.length + 1, "belongTo": state.id })
        }
    }



    const handleClick = () => {

        const err = {
            productName: "",
            productQuantity: "",
            productImage: "",
            noError: ""
        }
        if (!productInfo.name) {
            err.productName = "*Nhập tên sản phẩm"
        }
        if (!productInfo.quantity) {
            err.productQuantity = "*Nhập số lượng"
        }
        if (productInfo.quantity < 1) {
            err.productQuantity = "*Số lượng không hợp lệ"
        }
        if (!productInfo.thumbnail) {
            err.productImage = "*Chọn hình ảnh"
        }
        setError(err)
        if (!err.productName && !err.productImage && !err.productQuantity)
            setError({ ...error, noError: "*Thêm thành công" })
        productDispatch(SetProduct(productInfo))

    }

    console.log(error)

    return (
        <div className='addproduct'>
            <div className='addprouct-container'>
                <div className='container'>
                    <div className='addForm'>
                        <div className='addform-header'>
                            <h1>Thêm sản phẩm</h1>
                        </div>
                        <div className='addform-content'>
                            <div className='search-input' >
                                <p>PRODUCT NAME</p>
                                <input type="text" onChange={(value) => handleChange('name', value.target.value)} />
                                <p className='input_error'>{error.productName}</p>
                            </div>

                            <div className='search-input' >
                                <p>QUANTITY</p>
                                <input type="number" onChange={(value) => handleChange('quantity', value.target.value)} style={{ width: "30%" }} />
                                <p className='input_error'>{error.productQuantity}</p>

                            </div>

                            <div className='search-input' >
                                <p>PRODUCT NOTES</p>
                                <textarea onChange={(value) => handleChange('detail', value.target.value)}></textarea>

                            </div>

                            <div className='search-input' >
                                <p>ADD AN IMAGE</p>
                                <input type="file" onChange={e => onImageChange(e)} style={{ padding: "0" }} />
                                <p className='input_error'>{error.productImage}</p>
                                <img src={productInfo.thumbnail} alt="" />

                            </div>
                        </div>
                        <div className='add-btn'>
                            <button onClick={handleClick}>Xác nhận</button>
                            <p>{error.noError}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
