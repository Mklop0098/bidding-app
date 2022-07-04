import { useState } from 'react'
import { ProductReview } from '../../components/ProductReview'
import { SetProduct } from '../../Context/products/product.action'
import { useProductContext } from '../../Context/products/product.context'
import { useUserContext } from '../../Context/user/user.context'
import { Product as product } from '../../types'
import './style.css'

const MAX_STEP = 4

export const AddProducts = () => {
    const [image, setImage] = useState("")
    const [productInfo, setProductInfo] = useState<product>({} as product)

    const { productState, productDispatch } = useProductContext();
    const { state } = useUserContext();


    const handleChange = (field: string, value: string) => {
        setProductInfo({
            ...productInfo,
            [field]: value,
            "id": productState.products.length + 1
        })


    }

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProductInfo({ ...productInfo, "thumbnail": (URL.createObjectURL(event.target.files[0])), "id": productState.products.length + 1, "belongTo": state.id })
        }
    }



    const handleClick = () => {

        productDispatch(SetProduct(productInfo))
    }

    const [currentStep, setCurrentStep] = useState(1)
    console.log(currentStep)
    const handleNext = () => {
        setCurrentStep(currentStep + 1)
    }


    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)

    }

    return (
        <div className='addproduct'>
            <div className='addprouct-container'>
                <div className='container'>
                    <div className="stepper-container">
                        <div id="stepProgressBar">
                            <div className="step">
                                <div className={`bullet ${currentStep - 1 >= 1 && "completed"}`}></div>
                                <p className='step-text' onClick={() => setCurrentStep(1)}>Chọn hình ảnh</p>
                            </div>
                            <div className="step">
                                <div className={`bullet ${currentStep - 1 >= 2 && "completed"}`}></div>
                                <p className='step-text' onClick={() => setCurrentStep(2)}>Thông tin sản phẩm</p>

                            </div>
                            <div className="step">
                                <div className={`bullet ${currentStep - 1 >= 3 && "completed"}`}></div>
                                <p className='step-text' onClick={() => setCurrentStep(3)}>Tính sở hữu</p>

                            </div>
                            <div className="step">
                                <div className="bullet"></div>
                                <p className='step-text' onClick={() => setCurrentStep(4)}>Xác thực</p>

                            </div>
                        </div>
                        <div id="main">
                            {
                                currentStep === 1 ?
                                    <div className='stepAddImage padding'>
                                        <h1>Thêm hình ảnh</h1>

                                        <div className='imageAdd'>
                                            <img src={productInfo.thumbnail} alt="" />
                                        </div>
                                        <input type="file" onChange={e => onImageChange(e)} />
                                    </div> :
                                    currentStep === 2 ?
                                        <div className='stepAddInformation padding'>
                                            <h1 style={{ color: "white" }}>Thông tin sản phẩm</h1>
                                            <div className='stepAddInfo-container'>
                                                <div className='imageAdd'>
                                                    <img src={productInfo.thumbnail} alt="" />
                                                </div>
                                                <div className='informationForm'>
                                                    <p>Tên sản phẩm</p>
                                                    <div className='search-input' >

                                                        <input type="text" style={{ color: 'black', backgroundColor: `white` }} placeholder="Tên sản phẩm"
                                                            onChange={(value) => handleChange('name', value.target.value)} />
                                                    </div>
                                                    <p>Số lượng</p>
                                                    <div className='search-input' >

                                                        <input type="number" style={{ color: 'black', backgroundColor: `white` }} placeholder="Số lượng"
                                                            onChange={(value) => handleChange('quantity', value.target.value)} />
                                                    </div>
                                                    <p>Mô tả chi tiết</p>
                                                    <div className='search-input' >

                                                        <input type="text" style={{ color: 'black', backgroundColor: `white` }} placeholder="Mô tả"
                                                            onChange={(value) => handleChange('detail', value.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> :
                                        currentStep === 3 ? <div className="owner"></div> :
                                            <div className='stepAddInformation padding'>
                                                <h1 style={{ color: "white" }}>Thông tin sản phẩm</h1>
                                                <div className='stepAddInfo-container'>
                                                    <div className='imageAdd'>
                                                        <img src={productInfo.thumbnail} alt="" />
                                                    </div>
                                                    <div className='informationForm'>
                                                        <p>Tên sản phẩm</p>
                                                        <p className='styleP'>{productInfo.name}</p>
                                                        <p>Số lượng</p>
                                                        <p className='styleP'>{productInfo.quantity}</p>
                                                        <p>Mô tả chi tiết</p>
                                                        <p className='detail'>{productInfo.detail}</p>
                                                    </div>
                                                </div>
                                            </div>
                            }
                            <div className='controlBtn'>
                                <button id="previousBtn" onClick={handlePrevious} disabled={currentStep <= 1}>Bước trước đó</button>
                                {
                                    currentStep === MAX_STEP ? <button id="finishBtn" onClick={handleClick}>Xác nhận</button> :
                                        <button id="nextBtn" onClick={handleNext} disabled={currentStep === MAX_STEP}>Bước tiếp theo</button>
                                }


                            </div>

                        </div>
                    </div>


                    {/* <div className='addproduct-add'>
                    <div className='add-content'>
                        <div className='search'>
                            <i className="fa-solid fa-user"></i>
                            <input type="text" style={{ color: 'black', backgroundColor: `white` }} placeholder="Tên sản phẩm"
                                onChange={(value) => handleChange('name', value.target.value)} />
                        </div>
                        <div className='search'>
                            <i className="fa-solid fa-info"></i>
                            <input type="text" style={{ color: 'black', backgroundColor: `white` }} placeholder="Mô tả"
                                onChange={(value) => handleChange('detail', value.target.value)} />
                        </div>
                        <div className='search'>
                            <i className="fa-solid fa-users"></i>
                            <input type="number" style={{ color: 'black', backgroundColor: `white` }} placeholder="Số lượng"
                                onChange={(value) => handleChange('quantity', value.target.value)} />
                        </div>
                        <p>thêm hình ảnh</p>
                        <input type="file" onChange={e => onImageChange(e)} />
                        <button onClick={handleClick}>Post</button>
                    </div>
                    <div className={`picture ${productInfo.thumbnail && "box-shadow"}`}>
                        {
                            <img src={productInfo.thumbnail} alt="" />
                        }
                    </div>
                </div> */}
                </div>
            </div>
        </div >
    )
}