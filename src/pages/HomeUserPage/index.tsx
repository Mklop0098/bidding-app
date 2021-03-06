import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShowInformation } from "../../components/ShowInformation";
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
                                    <h2>H??? s?? c???a t??i</h2>
                                </div>

                                <div className={`myprofile ${currentState === currstate.myWallet && "choosen"}`} onClick={() => setCurrentState(currstate.myWallet)}>
                                    <i className="fa-solid fa-wallet"></i>
                                    <h2>V?? c???a t??i</h2>
                                </div>
                                <Link to="/" style={{ textDecoration: "none", width: "100%", marginLeft: "25px" }}>
                                    <div className="myprofile" onClick={handleLogout}>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <h2>????ng xu???t</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {
                            currentState === currstate.myProfile ?
                                <div className="userProfile">
                                    <div className="userProfile-header">
                                        <h1>H??? s?? c???a t??i</h1>
                                        <i className="fa-solid fa-pen"></i>
                                    </div>
                                    <div className="userProfile-content">
                                        <ShowInformation content={state.name} isDisable={true} title={"H???"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"T??n"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"T??n t??i kho???n"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Email"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Di ?????ng"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Live ID"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Ng??y sinh"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Gi???i t??nh"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Qu???c gia"} />
                                        <ShowInformation content={state.name} isDisable={true} title={"Ng??n ng???"} />
                                    </div>
                                </div> :
                                <div className="userProfile">
                                    <div className="userProfile-header">
                                        <h1>V?? c???a t??i</h1>
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

