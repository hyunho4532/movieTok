import { getDiscoverListFromMovie } from "../api";

export const fetchMovies = (setDiscoverList: any, setTotalMovies: any, genreId: any, page: any) => {
    getDiscoverListFromMovie(genreId, page).then(data => {
        setDiscoverList(data.results);
        setTotalMovies(data.total_pages);
    }).catch(error => {
        console.error(error);
    })
}