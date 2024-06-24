import { genreStore } from "../../../features/store";
import { getGenreList } from "../api";

const { setGenreList } = genreStore();

export const genreListData = getGenreList()
    .then(data => {
        setGenreList(data)
    })
    .catch(error => {
        console.log(error);
    })