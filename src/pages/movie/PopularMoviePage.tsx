import { useEffect } from "react"
import { popularMovie } from "../../entities/movie/api";

export function PopularMoviePage() {

    useEffect(() => {
        console.log(popularMovie);
    });

    return (
        <section className="w-[880px] h-[60px] mt-[120px]">
            <article>
                <h1 className="text-center text-xl font-bold">요즘 흥행 중인 영화들</h1>
            </article>
        </section>
    )
}