import { UserAction } from "./user.action";
import { UserConst } from "./user.const";
import { UserState } from "./user.context";

export const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case UserConst.SET_USER: {
            const { id, name, phone, address } = action.payload.user;
            return { id, name, phone, address }
        }
        case UserConst.DELETE_USER: {
            localStorage.removeItem("access_token");
            return { id: '', name: '', phone: '', address: '' }
        }
        case UserConst.UPDATE_PHONE: {
            return {
                ...state,
                phone: action.payload.phone
            }
        }
        default: return state;
    }
}