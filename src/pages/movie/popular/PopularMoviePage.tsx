import { PopularMovieItems } from "../../../components/items/PopularMovieItems";
import { useEffect, useState } from "react";
import { PopularMovieArticle, PopularMovieSection } from "../../../app/styles";

export interface PopularMovieProps {
    popularMovie: Promise<any[]>
}

export function PopularMoviePage(props: PopularMovieProps) {

    const [popularMovies, setPopularMovies] = useState<any[]>([]);

    useEffect(() => {
        props.popularMovie.then(data => {
            setPopularMovies(data);
        })
    })

    return (
        <PopularMovieSection>
            <PopularMovieArticle>
                <h1 className="text-center text-xl font-bold">요즘 흥행 중인 영화들</h1>
                <PopularMovieItems popularData={popularMovies} />
            </PopularMovieArticle>
        </PopularMovieSection>
    )
}