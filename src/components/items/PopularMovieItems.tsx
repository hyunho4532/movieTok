import { PopularMovieCard } from "../card/PopularMovieCard";
import { PopularMovieItem, PopularMovieItemFix } from "../../app/styles";

export interface PopularItemsProps  {
    popularData: any[]
}

export function PopularMovieItems(props: PopularItemsProps) {
    return (
        <PopularMovieItem>
            <PopularMovieItemFix>
                {props.popularData.map((movie: any, index: any) => {
                    const movieTitle = movie.title.length > 13 ? movie.title.substring(0, 13) : movie.title
                    return <PopularMovieCard key={index} movie={{ ...movie, title: movieTitle }} />
                })}
            </PopularMovieItemFix>
        </PopularMovieItem>
    );
}