import { PopularMovieProps } from "../../components/items/props/PopularMovieProps";
import { PopularMovieItems } from "../../components/items/PopularMovieItems";
import { useEffect, useState } from "react";

export function PopularMoviePage(props: PopularMovieProps) {

    const [popularMovies, setPopularMovies] = useState<any[]>([]);

    useEffect(() => {
        props.popularMovie.then(data => {
            setPopularMovies(data);
        })
    })

    return (
        <section className="w-[880px] h-[60px] mt-[120px]">
            <article>
                <h1 className="text-center text-xl font-bold">요즘 흥행 중인 영화들</h1>
                <PopularMovieItems popularMovie={popularMovies} />
            </article>
        </section>
    )
}