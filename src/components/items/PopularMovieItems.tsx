import { PopularMovieCard } from "../card/PopularMovieCard";
import { PopularMovieItem, PopularMovieItemFix } from "../../app/styles";
import { PopularItemsProps } from "./props/PopularItemsProps";

export function PopularMovieItems(props: PopularItemsProps) {
    return (
        <PopularMovieItem>
            <PopularMovieItemFix>
                {props.popularData.map((movie: any, index: any) => (
                    <PopularMovieCard key={index} movie={movie} />
                ))}
            </PopularMovieItemFix>
        </PopularMovieItem>
    );
}