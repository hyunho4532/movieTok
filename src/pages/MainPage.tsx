import { Header } from "../components/header/Header";
import { PopularMoviePage } from "./movie/PopularMoviePage";

export function MainPage() {
    return (
        <>
            <Header
                headerRecommendMovie="추천 영화"
                headerMovieInsert="등록"
                headerLogin="로그인" />

            <PopularMoviePage />
        </>
    )
}