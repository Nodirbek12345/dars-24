import axios from "axios";

// axios instance
export const api = axios.create({
    baseURL: "https://fakestoreapi.com"
})

// api.interceptors.request.use(()=>{})