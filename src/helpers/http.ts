import axios from "axios"

export default class HTTPClient {
    baseUrl = 'http://localhost:3001/api/v1';

    post = (url: string, data: any) => {
        return axios.post(this.baseUrl + url, data, {
            "headers": {
                "Content-Type": "application/json"
            }
        });
    }

    get = (url: string) => {
        return axios.get(this.baseUrl + url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzAwMTA2YzVmMjcwYmNiZDk3M2Q0OSIsIm5hbWUiOiJIb2FuZyBDb25nIFNvbiIsInBob25lIjoiMDk4NzY1NDMyMSIsImFkZHJlc3MiOiJobyBjaGkgbWluaCIsInVzZXJuYW1lIjoiYWJjIiwiaWF0IjoxNjU2NzUwMzQyLCJleHAiOjE2NTY4MzY3NDJ9.wxv8msHK8xrBi-zVEXsvcfYtzmVvZgS4PsXGlmD2AO0"
            }
        });
    }
}