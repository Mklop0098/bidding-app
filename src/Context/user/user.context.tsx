import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { getUserInfo } from "../../api/user";
import { setUser, UserAction } from "./user.action";
import { userReducer } from "./user.reducer";

export type UserState = {
    id: string,
    name: string,
    address: string,
    phone: string,
}

type UserContextType = {
    state: UserState;
    dispatch: Dispatch<UserAction>
}

const initState = {
    id: '',
    name: '',
    phone: '',
    address: ''
}

export const UserContext = createContext<UserContextType>({ state: initState } as UserContextType);

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = (props: any) => {
    const [state, dispatch] = useReducer(userReducer, initState);

    useEffect(() => {
        getUserInfo().then(data => {
            dispatch(setUser(data.data.data))
        })
    }, [])

    return <UserContext.Provider value={{ state, dispatch }}>
        {props.children}
    </UserContext.Provider>
}
