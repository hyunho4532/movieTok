
import { PopularMoviesCard } from "../../app/styles";
import { PopularMovieCardProps } from "./props/PopularMovieCardProps";

export function PopularMovieCard({ children }: PopularMovieCardProps) {
    return (
        <PopularMoviesCard>
            {children}
        </PopularMoviesCard>
    );
}
