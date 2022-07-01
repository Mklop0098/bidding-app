import './style.css';
import { Link } from 'react-router-dom';
import { downheader } from '../../../data/header';


export const DownHeader = () => {
    return <div className='downheader' id='myHeader'>
        <div className='header-container'>
            <div className='logo'>
                <Link to={"/"} style={{textDecoration: "none", color: "white"}}>
                <span>Chilindo</span></Link>
            </div>
            <div className='menu'>
                {downheader.map(item => (
                    <Link to={item.link} style={{textDecoration: "none"}}>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>

        
    </div>
}