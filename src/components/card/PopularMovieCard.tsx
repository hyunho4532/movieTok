
import { Link } from "react-router-dom";
import { PopularMovieCardFix, PopularMovieFavorite, PopularMovieId, PopularMovieImage, PopularMovieTitle, PopularMoviesCard } from "../../app/styles";
import { PopularMovieCardProps } from "./props/PopularMovieCardProps";
import { useState } from "react";

export function PopularMovieCard({ movie }: PopularMovieCardProps) {

    const [isFavorite, setIsFavorite] = useState(false);

    const setFavorite = () => {
        setIsFavorite(isFavorite => !isFavorite);
    }

    return (
        <PopularMoviesCard>
            <PopularMovieCardFix>
                <PopularMovieTitle>{movie.title}</PopularMovieTitle>
                <PopularMovieFavorite onClick={setFavorite}>
                    { isFavorite ? "❤️" : "🤍" }
                </PopularMovieFavorite>
            </PopularMovieCardFix>
    
            <Link to={`http://localhost:5173/popular/movie/detail/${movie.id}`}>
                <PopularMovieId>{movie.id}</PopularMovieId>
                <PopularMovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            </Link>
        </PopularMoviesCard>
    );
}
