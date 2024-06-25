import { AxiosInstance } from "../../../shared/axios";

export const getDiscoverListFromMovie = async (actionId: string, page: number): Promise<any[]> => {

    const axiosInstance = AxiosInstance('discover');

    try {
        const response = await axiosInstance.get(`/movie?include_adult=false&include_video=false&language=ko-KR&page=${page}&sort_by=popularity.desc&with_genres=${actionId}`);

        if (!response) {
            throw new Error('Network response was not ok');
        }

        return response.data;
        
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}