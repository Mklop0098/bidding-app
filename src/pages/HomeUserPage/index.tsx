import { useUserContext } from "../../Context/user/user.context"
import './style.css'

export const HomeUserPage = () => {

    const { state } = useUserContext();


    return (
        <div className="homeuser">
            <div className="container">
                <div className="user-infor">
                    <div className="item">
                        <p>id: </p>
                        <p>{state.id}</p>
                    </div>
                    <div className="item">
                        <p>name: </p>
                        <p>{state.name}</p>
                    </div>
                    <div className="item">
                        <p>address: </p>
                        <p>{state.address}</p>
                    </div>
                    <div className="item">
                        <p>phone number: </p>
                        <p>{state.phone}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}