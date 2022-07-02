import { UserData } from "../../types"
import { typedAction } from "../typed"
import { UserConst } from "./user.const"

export const setUser = (user: UserData) => {
    return typedAction(UserConst.SET_USER, { user })
}

export const deleteUser = () => {
    return typedAction(UserConst.DELETE_USER);
}

export const updatePhoneNumber = (newPhoneNumber: string) => {
    return typedAction(UserConst.UPDATE_PHONE, { phone: newPhoneNumber })
}

export type UserAction = ReturnType<
    typeof setUser |
    typeof deleteUser |
    typeof updatePhoneNumber
>