
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getTest, register } from '../../api/user';
import { UserProductContext } from '../../Context';
import { UserData } from '../../types'

export const SignInPage = () => {

    const [user, setUser] = useState<UserData>({} as UserData);
    const [repass, setRepass] = useState("")
    const [error, setError] = useState({ username: "", password: "", regist: "", name: "" })


    const navigate = useNavigate();

    const handleChange = (field: string, value: string) => {
        setError({ username: "", password: "", regist: "", name: "" })
        setUser({
            ...user,
            [field]: value
        })

    }

    const handleSubmit = (func: (user: string) => void) => {
        if (repass === user.password && user.password.length >= 8 && user.name) {
            register(user)
                .then(data => {
                    func(user.username)
                    localStorage.setItem("acccess_token", JSON.stringify(data.data.data.token));
                    navigate("/")
                })
                .catch(err => {
                    setError({ ...error, regist: err.response.data.message })
                })
        }
        else if (repass != user.password) {
            setError({ ...error, password: "mat khau khong khop" })
        }
        else if (user.password.length < 8) {
            setError({ ...error, password: "mat khau phai co it nhat 8 ki tu" })
        }
        else if (!user.name) {
            setError({ ...error, name: "nhap ten nguoi dung" })
        }


    }

    return (
        <UserProductContext.Consumer>
            {
                data => (
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
                                        <button style={{ width: "100%", fontSize: "16px" }} onClick={() => handleSubmit(data.setUser)}>Đăng Kí</button>
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
        </UserProductContext.Consumer>
    )
}