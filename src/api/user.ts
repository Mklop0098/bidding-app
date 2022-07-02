import axios from "axios";
import HTTPClient from "../helpers/http";
import { UserData, UserLogin } from "../types";

const httpClient = new HTTPClient();

export const register = (data: UserData) => {
    return httpClient.post("/register", data);

}

export const login = (username: string, password: string) => {
    return httpClient.post("/login", { username, password })
}

export const getUserInfo = async () => {
    return await httpClient.get("/user");
}