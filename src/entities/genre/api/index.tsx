import { AxiosInstance } from "../../../shared/axios";

export const getGenreList = async (): Promise<any[]> => {

    const axiosInstance = AxiosInstance('genre');

    try {
        const response = await axiosInstance.get('/movie/list?language=ko');

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data.genres;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}