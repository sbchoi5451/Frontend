import axios from "axios";

const signupApi = axios.create({
    baseURL: "http://localhost:4000"
})

// export const getUser = async () => {
//     const response = await signupApi.get('/users')
//     return response.data
// }

// export const addUser = async (user) => {
//     return await signupApi.post('/users', user)
// }

export default signupApi

// export const accessClient = axios.create({
//     baseURL: API_END_POINT,
//     timeout: 180000,
//     withCredentials: false,
//     headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
//     }
//     });

// axios.post('api',{name: name},{headers: {Authorization: token,},})

// axios.get('api',
// {
// params: {name: name},
// headers: {Authorization: token,},
// }
// )