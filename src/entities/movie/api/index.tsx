import { AxiosInstance } from "../../../shared/axios";

export const getTrendingMovies = async (): Promise<any[]> => {

    const axiosInstance = AxiosInstance('movie');


    try {
        const response = await axiosInstance.get('/popular?language=ko-KR&page=1');

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data.results;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const getPopularMovies = async (): Promise<any[]> => {

    const axiosInstance = AxiosInstance('movie');


    try {
        const response = await axiosInstance.get('/popular?language=ko-KR&page=1');

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data.results;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const getPopularActors = async (): Promise<any[]> => {

    const axiosInstance = AxiosInstance('actor');

    try {
        const response = await axiosInstance.get('/popular?language=ko-KR&page=1');

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data.results;
    
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const getPopularMovieDetail = async (movieId: string): Promise<any> => {

    const axiosInstance = AxiosInstance('movie');

    try {

        const response = await axiosInstance.get(`/${movieId}?language=ko-KR`)

        if (!response) {
            throw new Error('Network response was not ok');
        }

        console.log(response.data);

        return response.data;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const getPopularMovieDetailVideos = async (movieId: string): Promise<any> => {

    const axiosInstance = AxiosInstance('movie');

    try {
        const response = await axiosInstance.get(`/${movieId}/videos?language=ko-KR`);

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data.results;
    
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const getPopularMovieDetailActors = async (movieId: string): Promise<any> => {

    const axiosInstance = AxiosInstance('movie');

    try {
        const response = await axiosInstance.get(`/${movieId}/credits?language=ko-KR`)

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data.cast;
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}