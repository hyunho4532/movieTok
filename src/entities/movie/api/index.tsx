import { TMDB_BASE_URL } from "../../../constants/const/const";
import { movieApiOptions } from "../../../constants/options/MovieApiOptions";

export const getPopularMovies = async (): Promise<any[]> => {
    try {
        const response = await fetch(`${TMDB_BASE_URL}/popular?language=en-US&page=1`, movieApiOptions);
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
};