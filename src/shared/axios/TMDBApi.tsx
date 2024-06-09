import axios from "axios";
import { TMDB_BASE_URL } from "../../constants/const/const";

export const TMDBAxiosInstance = axios.create ({
    baseURL: TMDB_BASE_URL,
    timeout: 1000,
})

TMDBAxiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

TMDBAxiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});