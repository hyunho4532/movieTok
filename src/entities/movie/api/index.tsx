import { TMDBAxiosInstance } from "../../../shared/axios/TMDBApi";

export const getPopularMovies = async (): Promise<any[]> => {
    try {
        const response = await TMDBAxiosInstance.get('/popular?language=ko-KR&page=1');

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
    try {

        const response = await TMDBAxiosInstance.get(`/${movieId}?language=ko-KR`)

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}