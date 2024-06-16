import axios from "axios";
import { GOOGLE_BASE_URL, TMDB_API_KEY, TMDB_BASE_URL } from "../../constants/const/const";

export const AxiosInstance = (type: string) => {
    const instance = axios.create({
        baseURL: type === 'movie' || type === 'actor' ? TMDB_BASE_URL(type) : GOOGLE_BASE_URL,
        timeout: 1000,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    });

    instance.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    return instance;
};