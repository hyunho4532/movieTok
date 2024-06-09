import { TMDB_BASE_URL } from "../../../constants/const/const";
import { movieApiOptions } from "../../../constants/options/MovieApiOptions";
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

export const getPopularMovieDetail = async (movieId: string): Promise<any[]> => {
    try {
        const response = await fetch(`${TMDB_BASE_URL}/popular?language=ko-KR&page=1`, movieApiOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data.results;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}