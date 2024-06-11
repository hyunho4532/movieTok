import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../../constants/const/const";

export const TMDBAxiosInstance = (type: string) => {
    const instance = axios.create({
        baseURL: TMDB_BASE_URL(type),
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