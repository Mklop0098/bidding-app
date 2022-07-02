import moment from 'moment'
import { useState } from 'react'
import { Products } from '../../types'
import { UserProducts } from '../../components/UserProduct'
import './style.css'


export const AddProducts = () => {
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("https://createsigns.co.nz/wp-content/uploads/2017/01/no-image-icon-13-2.png")

    const handleSubmit = (func: (data: Products) => void) => {

        const tmp = {
            thumbnail: image,
            name: name,
            detail: detail,
            price: price,
            id: name,
            startTime: moment(),
        }
        func(tmp)
    }

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleDelete = () => {
        setImage("https://createsigns.co.nz/wp-content/uploads/2017/01/no-image-icon-13-2.png")
    }

    return (
        <div className='addproduct'>
            <div className='container'>
                <h1 className='addproduct-add'>Thêm sản phẩm</h1>

                <div className='addproduct-add'>

                    <div className='add-content'>
                        <p>Tên sản phẩm</p>
                        <input type="text" placeholder='' onChange={e => setName(e.target.value)} value={name} />
                        <p>Mô tả</p>
                        <input type="text" placeholder='' onChange={e => setDetail(e.target.value)} value={detail} />
                        <p>Giá khởi điểm</p>
                        <input type="text" placeholder='' onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div className='add-picture'>
                        <p>thêm hình ảnh</p>
                        <input type="file" placeholder='' onChange={e => onImageChange(e)} />
                        <div className='picture'>
                            <button onClick={handleDelete} className={`${image === "https://createsigns.co.nz/wp-content/uploads/2017/01/no-image-icon-13-2.png" && "deleteimage"}`}>Xóa</button>
                            <img src={image} alt="" />
                        </div>
                        {/* <button onClick={() => handleSubmit(list.addUserProduct)} style={{ margin: "20px 0", padding: "10px" }}>Đăng</button> */}
                    </div>

                </div>

                <div className='addproduct-show'>
                    <h1>Sản phẩm của bạn</h1>
                    <div className='addproduct-list'>
                        {/* {
                            list.userProduct.length > 0 ? list.userProduct.map((data) => (
                                <UserProducts data={data} />
                            ))
                                :
                                <div className='isempty'>
                                    <img src="https://www.chilindo.com/assets/svgIcon/notFound.svg" alt="" />
                                    <p>Bạn chưa đăng sản phẩm nào</p>
                                </div>


                        } */}
                    </div>

                </div>
            </div>
        </div>

    )
}