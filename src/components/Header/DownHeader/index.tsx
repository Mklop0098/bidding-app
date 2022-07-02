import './style.css';
import { Link } from 'react-router-dom';
import { downheader } from '../../../data/header';
import { UserProductContext } from '../../../Context';


export const DownHeader = () => {
    return (
        <UserProductContext.Consumer>
            {
                user => (
                    <div className='downheader' id='myHeader'>
                        <div className='header-container'>
                            <div className='logo'>
                                <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                                    <span>Chilindo</span></Link>
                            </div>
                            <div className='menu'>
                                {downheader.map(item => (
                                    <Link to={user.user === "" ? "/web/login" : item.link} style={{ textDecoration: "none" }}>
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                                <Link to={user.user === "" ? "/web/login" : ""} style={{ textDecoration: "none", color: "white" }}>
                                    <span>{user.user ? user.user : "Đăng nhập"}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </UserProductContext.Consumer>

    )
}