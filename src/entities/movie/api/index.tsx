import { TMDBAxiosInstance } from "../../../shared/axios/TMDBApi";

export const getPopularMovies = async (): Promise<any[]> => {

    const axiosInstance = TMDBAxiosInstance('movie');

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

    const axiosInstance = TMDBAxiosInstance('actor');

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

    const axiosInstance = TMDBAxiosInstance('movie');

    try {

        const response = await axiosInstance.get(`/${movieId}?language=ko-KR`)

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const getPopularMovieDetailActors = async (movieId: string): Promise<any> => {

    const axiosInstance = TMDBAxiosInstance('movie');

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