
import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login, register } from '../../api/user'
import { UserProductContext } from '../../Context'
import { UserLogin } from '../../types'
import './style.css'

export const LoginPage = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({ username: "", password: "", login: "" })
    const navigate = useNavigate();




    const handleSubmit = (func: (username: string) => void) => {
        const error = {
            username: "",
            password: "",
            login: ""
        }

        if (!username) {
            error.username = "nhap ten dang nhap"
        }
        if (!password) {
            error.password = "nhap mat khau"
        }

        setError(error)

        if (username && password) {
            login(username, password)
                .then(data => {
                    localStorage.setItem("acccess_token", JSON.stringify(data.data.token));
                    func(data.data.user.name)
                    navigate('/')
                })
                .catch(err => {
                    setError({ ...error, login: err.response.data.message })
                })
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setError({ ...error, login: "", username: "" })
        setUserName(value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value)
        if (value.length < 8) {
            setError({ ...error, password: "mat khau phai co it nhat 8 ki tu", login: "" })
        }
        else if (value.length === 0) {
            setError({ ...error, password: "nhap mat khau", login: "" })
        }
        else {
            setError({ ...error, password: "", login: "" })
        }

    }

    return (
        <UserProductContext.Consumer>
            {
                user => (
                    <div className="login">
                        <div className="login-container">
                            {/* <div className="login-brand"></div> */}
                            <div className="login-form">
                                <div className='form'>
                                    <h1 style={{ color: "white" }}>Login</h1>
                                    <div className='search'>
                                        <i className="fa-solid fa-user"></i>
                                        <input type="text" style={{ color: 'black', backgroundColor: `white` }} placeholder="Tên đăng nhập" value={username}
                                            onChange={handleUsernameChange} />
                                    </div>
                                    <p>{error.username}</p>
                                    <div className='search'>
                                        <i className="fa-solid fa-lock"></i>
                                        <input type="password" style={{ color: 'black', backgroundColor: `white` }} placeholder="Mật khẩu" value={password}
                                            onChange={handlePasswordChange} />
                                    </div>
                                    <p>{error.password}</p>
                                    <p>{error.login}</p>
                                    <div className='coor-button'>
                                        <button style={{ width: "100%", fontSize: "16px" }} onClick={() => handleSubmit(user.setUser)}>Đăng nhập</button>
                                    </div>
                                    <label style={{ color: "white" }}>Or</label>
                                    <div className='coordination'>
                                        <div className='coor-button'>
                                            <Link to="/web/signin" style={{ width: "100%" }}>
                                                <button style={{ backgroundColor: "#42b72a", fontSize: "16px" }}>Đăng kí</button>
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