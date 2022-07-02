import './style.css';
import { Link } from 'react-router-dom';
import { downheader } from '../../../data/header';
import { useUserContext } from '../../../Context/user/user.context';

export const DownHeader = () => {
    const { state: userState } = useUserContext();
    return (
        <div className='downheader' id='myHeader'>
            <div className='header-container'>
                <div className='logo'>
                    <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                        <span>Chilindo</span></Link>
                </div>
                <div className='menu'>
                    {downheader.map(item => (
                        <Link to={item.link} style={{ textDecoration: "none" }}>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                    <Link to={userState.name === "" ? "/web/login" : ""} style={{ textDecoration: "none", color: "white" }}>
                        <span>{userState.name ? userState.name : "Đăng nhập"}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}