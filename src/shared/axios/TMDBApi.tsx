import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../../constants/const/const";

export const TMDBAxiosInstance = axios.create ({
    baseURL: TMDB_BASE_URL,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_KEY}`
    }
})

TMDBAxiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

TMDBAxiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});