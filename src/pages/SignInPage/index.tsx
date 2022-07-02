
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../api/user';
import { setUser } from '../../Context/user/user.action';
import { useUserContext } from '../../Context/user/user.context';
import { UserData } from '../../types'

export const SignInPage = () => {

    const [userInfo, setUserInfo] = useState<UserData>({} as UserData);
    const [repass, setRepass] = useState("")
    const [error, setError] = useState({ username: "", password: "", regist: "", name: "" })

    const navigate = useNavigate();
    const { dispatch } = useUserContext();

    const handleChange = (field: string, value: string) => {
        setError({ username: "", password: "", regist: "", name: "" })
        setUserInfo({
            ...userInfo,
            [field]: value
        })

    }

    const handleSubmit = () => {
        if (repass === userInfo.password && userInfo.password.length >= 8 && userInfo.name) {
            register(userInfo)
                .then(data => {
                    dispatch(setUser({
                        id: data.data.user.id,
                        name: data.data.user.name,
                        address: data.data.user.address,
                        phone: data.data.user.phone,
                        username: data.data.user.username
                    }))
                    localStorage.setItem("access_token", JSON.stringify(data.data.data.token));
                    navigate("/")
                })
                .catch(err => {
                    setError({ ...error, regist: err.response.data.message })
                })
        }
        else if (repass != userInfo.password) {
            setError({ ...error, password: "mat khau khong khop" })
        }
        else if (userInfo.password.length < 8) {
            setError({ ...error, password: "mat khau phai co it nhat 8 ki tu" })
        }
        else if (!userInfo.name) {
            setError({ ...error, name: "nhap ten nguoi dung" })
        }


    }

    return (

        <div className="login">
            <div className="login-container">
                {/* <div className="login-brand"></div> */}
                <div className="login-form">
                    <div className='form'>
                        <h1 style={{ color: "white" }}>Sign In</h1>
                        <div className='search'>
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                style={{ color: 'black', backgroundColor: `white` }}
                                placeholder="Ten nguoi dung"
                                onChange={(value) => handleChange('name', value.target.value)}
                            />
                        </div>
                        <p>{error.name}</p>

                        <div className='search'>
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                style={{ color: 'black', backgroundColor: `white` }}
                                placeholder="so dien thoai"
                                onChange={(value) => handleChange('phone', value.target.value)}
                            />
                        </div>
                        <div className='search'>
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                style={{ color: 'black', backgroundColor: `white` }}
                                placeholder="dia chi"
                                onChange={(value) => handleChange('address', `${value.target.value === "" ? "" : value.target.value}`)}
                            />
                        </div>
                        <div className='search'>
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                style={{ color: 'black', backgroundColor: `white` }}
                                placeholder="Ten dang nhap"
                                onChange={(value) => handleChange('username', value.target.value)}
                            />
                        </div>

                        <div className='search'>
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                style={{ color: 'black', backgroundColor: `white` }}
                                placeholder="mat khau"
                                onChange={(value) => handleChange('password', value.target.value)}
                            />
                        </div>
                        <div className='search'>
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                style={{ color: 'black', backgroundColor: `white` }}
                                placeholder="Nhap lai password"
                                onChange={(value) => setRepass(value.target.value)}
                            />
                        </div>
                        <p>{error.password}</p>
                        <p>{error.regist}</p>
                        <div className='coor-button'>
                            <button style={{ width: "100%", fontSize: "16px" }} onClick={handleSubmit}>Đăng Kí</button>
                        </div>
                        <label style={{ color: "white" }}>Or</label>
                        <div className='coordination'>
                            <div className='coor-button'>
                                <Link to="/web/login" style={{ width: "100%" }}>
                                    <button style={{ backgroundColor: "#42b72a", fontSize: "16px" }}>Đăng nhập</button>
                                </Link>
                            </div>
                            <div className='coor-button'>
                                <Link to="/" style={{ width: "100%" }}>
                                    <button style={{ backgroundColor: "#cc0000", fontSize: "16px" }}>Quay lại</button>
                                </Link>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
}