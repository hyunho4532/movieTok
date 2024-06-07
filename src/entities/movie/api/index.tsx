import { TMDB_BASE_URL } from "../../../constants/const/const";
import { movieApiOptions } from "../../../constants/options/MovieApiOptions";

export const popularMovie = fetch(`${TMDB_BASE_URL}/popular?language=en-US&page=1`, movieApiOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));