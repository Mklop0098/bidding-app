import './style.css'
import { Product as product } from '../../types'
import './style.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useProductContext } from '../../Context/products/product.context';
import { DeleteProduct } from '../../Context/products/product.action';


type Data = {
    data: product
}

export const ProductReview: React.FC<Data> = (props) => {
    const { data } = props;

    const { productDispatch } = useProductContext();

    const handleDelete = () => {
        productDispatch(DeleteProduct(data.id))
    }

    return (
        <div className='storage-product'>
            <div className='product_thumnail' style={{
                background: `url("${data.thumbnail}") center center no-repeat`,
                backgroundSize: "cover"
            }}>
                <i className="fa-solid fa-rectangle-xmark" onClick={handleDelete} style={{ cursor: "pointer", color: "red", paddingRight: "5px", fontSize: "18px" }}></i>
            </div>
            <div className='product-content'>
                <h4>{data.name}</h4>
                <p>{data.detail}</p>
            </div>
            <div className='product-controller'>
                <Link to={`/user/bid/${data.name}`} style={{ width: "30%" }}><button>Đấu giá</button></Link>
                <Link to={`/user/sell/${data.name}`} style={{ width: "30%" }}><button>Bán</button></Link>




            </div>
        </div >
    )
}
{/* <div className='product-container'>
                <div className='product-img' style={{
                    background: `url("${data.thumbnail}") center center no-repeat`,
                    backgroundSize: "cover"
                }}></div>
                <h4>{data.name}</h4>
                <p>{data.detail}</p>
                <div className='controler'>
                    <Link to={`/user/bid/${data.name}`}><button>Đấu giá</button></Link>
                    <Link to={`/user/sell/${data.name}`}><button>Bán</button></Link>
                    <button onClick={handleDelete}>Xóa</button>

                </div>
            </div> */}