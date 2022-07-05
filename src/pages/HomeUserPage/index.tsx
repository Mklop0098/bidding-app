import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { deleteUser } from "../../Context/user/user.action";
import { useUserContext } from "../../Context/user/user.context"
import './style.css'

const currstate = {
    myProfile: "MY_PROFILE",
    myWallet: "MY_WALLET"
}

export const HomeUserPage = () => {

    const { state, dispatch } = useUserContext();

    const [currentState, setCurrentState] = useState(currstate.myProfile)

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        dispatch(deleteUser())
    }

    return (
        <div className="homeuser">
            <div className="container">
                <div className="userProfile-container">
                    <div className="profile-header">
                        <div className="avatar-menu">
                            <div className="avatar">
                                <img src="https://th.bing.com/th/id/OIP.ZAtKWMooAm1FCbk5i_xvKwHaHa?pid=ImgDet&rs=1" alt="" />
                                <h3>{state.name}</h3>
                                <p>@{state.name}</p>
                            </div>
                            <div className="user-wallet" >
                                <div className="wallet-type">
                                    <p>Redeemable Cash</p>
                                    <strong> 0 <sup>VND</sup></strong>
                                </div>
                                <div className="wallet-type">
                                    <p>Cashback</p>
                                    <strong> 0 <sup>VND</sup></strong>

                                </div>
                                <div className="wallet-type">
                                    <p>Store Credit</p>
                                    <strong> 0 <sup>VND</sup></strong>

                                </div>
                            </div>
                            <div className="profile-title">
                                <div className={`myprofile ${currentState === currstate.myProfile && "choosen"}`} onClick={() => setCurrentState(currstate.myProfile)}>
                                    <i className="fa-solid fa-user"></i>
                                    <h2>Hồ sơ của tôi</h2>
                                </div>

                                <div className={`myprofile ${currentState === currstate.myWallet && "choosen"}`} onClick={() => setCurrentState(currstate.myWallet)}>
                                    <i className="fa-solid fa-wallet"></i>
                                    <h2>Ví của tôi</h2>
                                </div>
                                <Link to="/" style={{ textDecoration: "none", width: "100%", marginLeft: "25px" }}>
                                    <div className={`myprofile ${currentState === currstate.myWallet && "choosen"}`} onClick={handleLogout}>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <h2>Đăng xuất</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {
                            currentState === currstate.myProfile ?
                                <div className="userProfile">
                                    <div className="userProfile-header">
                                        <h1>Hồ sơ của tôi</h1>
                                        <i className="fa-solid fa-pen"></i>
                                    </div>
                                    <div className="userProfile-content">
                                        <div className="content-item">
                                            <p>Họ</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Têm</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Tên tài khoản</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Email</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Di động</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Live ID</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Ngày sinh</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Giới tính</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Quốc gia</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                        <div className="content-item">
                                            <p>Ngôn ngữ</p>
                                            <input type="text" value={state.name} disabled={true} />
                                        </div>
                                    </div>
                                </div> :
                                <div className="userProfile">
                                    <div className="userProfile-header">
                                        <h1>Ví của tôi</h1>
                                    </div>
                                    <div className="userProfile-content">

                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

