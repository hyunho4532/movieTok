import { Header } from "../components/header/Header";
import { popularActorData, popularMovieData } from "../entities/movie/getter";
import { discoverStore } from "../features/store";
import { getMovies } from "../services/firebase";
import { PopularActorPage } from "./actor/PopularActorPage";
import { PopularMoviePage } from "./movie/PopularMoviePage";
import { UserMoviePage } from "./movie/UserMoviePage";

export function MainPage() {

    const { movieList, setMovieList } = discoverStore();
    getMovies(setMovieList)

    return (
        <>
            <Header
                headerRecommendMovie="추천 영화"
                headerMovieInsert="등록"
                headerLogin="로그인" />

            <PopularMoviePage
                popularMovie={popularMovieData} />

            <PopularActorPage
                popularActor={popularActorData} />

            <UserMoviePage
                userMovie={movieList!} />
        </>
    )
}