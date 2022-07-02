import axios from "axios"

export default class HTTPClient {
    baseUrl = 'http://localhost:3001/api/v1';

    post = (url: string, data: any) => {
        return axios.post(this.baseUrl + url, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + (localStorage.getItem("access_token") || '').replaceAll("\"", '')
            }
        });
    }

    get = (url: string) => {
        return axios.get(this.baseUrl + url, {
            headers: {
                "Authorization": "Bearer " + (localStorage.getItem("access_token") || '').replaceAll("\"", '')
            }
        });
    }
}