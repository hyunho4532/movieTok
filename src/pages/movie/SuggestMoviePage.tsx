import { useEffect, useState } from "react";
import { SuggestMovieArticle, SuggestMovieSections } from "../../app/styles";
import { TrendingMovieItems } from "../../components/items/TrendingMovieItems";
import { trendingMovieData } from "../../entities/movie/getter";


export function SuggestMoviePage() {

    const [trendingMovies, setTrendingMovies] = useState<any[]>([]);

    useEffect(() => {
        trendingMovieData.then(data => {
            setTrendingMovies(data);
        })
    })

    return (
        <>
            <SuggestMovieSections>
                <SuggestMovieArticle>
                    <h1 className="text-center text-xl font-bold">오늘 핫한 영화들을 조회해봤어요!</h1>
                    <TrendingMovieItems trendingMovieData={trendingMovies} />
                </SuggestMovieArticle>
            </SuggestMovieSections>
        </>
    )
}