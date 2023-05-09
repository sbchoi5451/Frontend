import axios from "axios";

const loginApi = axios.create({
    baseURL: "http://13.124.170.137:8080/"
});

export const login = (userId, password) => {
    return loginApi.post("/api/user/login", {userId, password})
        .then((response) => {
            const accessToken = response.data.Authorization;
            const refreshToken = response.data.RefreshToken;
            localStorage.setItem("refreshToken", refreshToken);
            document.cookie = `accessToken=${accessToken}`; //토큰 값 저장위치 다시 확인
            return accessToken;
        })
        .catch((error) => {
            console.error(error);
        });
};

export default loginApi;
