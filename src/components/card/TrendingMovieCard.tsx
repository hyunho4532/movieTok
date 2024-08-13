import { PopularMovieCardFix, PopularMovieTitle, PopularMoviesCard } from "../../app/styles";
import { TrendingMovieCardProps } from "./props/TrendingMovieCardProps";

export function TrendingMovieCard({ movie }: TrendingMovieCardProps) {

    return (
        <PopularMoviesCard>
            <PopularMovieCardFix>
                <PopularMovieTitle>{movie.title}</PopularMovieTitle>
            </PopularMovieCardFix>
        </PopularMoviesCard>
    );
}