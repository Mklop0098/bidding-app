import './style.css';
import { Link } from "react-router-dom";
import { Product } from '../../components/Product';
import { homeLink, listProduct } from '../../data/header';
import { useUserContext } from '../../Context/user/user.context';

export const HomePage = () => {

    const { state, dispatch } = useUserContext();

    return (
        <div className='homepage'>
            <div className='container'>
                <div className='homepage-container'>
                    <div className='homepage-menu'>
                        {
                            homeLink.map(item => (
                                <Link to={item.link} style={{ textDecoration: "none", color: "black" }}>
                                    <h4 key={item.link}>
                                        {item.title}</h4>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='content-container'>
                    {listProduct.map((item) => (
                        <Product data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}