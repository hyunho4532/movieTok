
import { Link } from "react-router-dom";
import { PopularMovieCardFix, PopularMovieFavorite, PopularMovieId, PopularMovieImage, PopularMovieTitle, PopularMoviesCard } from "../../app/styles";
import { PopularMovieCardProps } from "./props/PopularMovieCardProps";

export function PopularMovieCard({ movie }: PopularMovieCardProps) {
    return (
        <PopularMoviesCard>
            <Link to={`http://localhost:5173/popular/movie/detail/${movie.id}`}>
                <PopularMovieCardFix>
                    <PopularMovieTitle>{movie.title}</PopularMovieTitle>
                    <PopularMovieFavorite>❤️</PopularMovieFavorite>
                </PopularMovieCardFix>
    
                <PopularMovieId>{movie.id}</PopularMovieId>
                <PopularMovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            </Link>
        </PopularMoviesCard>
    );
}
