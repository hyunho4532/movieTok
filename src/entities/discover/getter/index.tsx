import { getDiscoverListFromMovie } from "../api";
import { Discover } from "../modal/discover";
import { DiscoverListResponse } from "../response/DiscoverListResponse";

export const fetchMovies = (setDiscoverList: (discover: Discover[]) => void, setTotalMovies: any, genreId: any, page: any) => {
    getDiscoverListFromMovie(genreId, page).then((data: DiscoverListResponse) => {
        setDiscoverList(data.results);
        setTotalMovies(data.total_pages);
    }).catch(error => {
        console.error(error);
    });
}