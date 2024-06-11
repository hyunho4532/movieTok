import { Header } from "../components/header/Header";
import { getPopularMovies } from "../entities/movie/api";
import { PopularActorPage } from "./actor/PopularActorPage";
import { PopularMoviePage } from "./movie/PopularMoviePage";

export function MainPage() {

    const popularMovieData = getPopularMovies()
        .then(data => {
            return data
        })

    return (
        <>
            <Header
                headerRecommendMovie="추천 영화"
                headerMovieInsert="등록"
                headerLogin="로그인" />

            <PopularMoviePage
                popularMovie={popularMovieData} />

            <PopularActorPage />
        </>
    )
}