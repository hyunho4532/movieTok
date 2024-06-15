import { Header } from "../components/header/Header";
import { popularActorData, popularMovieData } from "../entities/movie/getter";
import { PopularActorPage } from "./actor/PopularActorPage";
import { PopularMoviePage } from "./movie/PopularMoviePage";

export function MainPage() {
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
        </>
    )
}