
import { Link } from "react-router-dom";
import { PopularMovieCardFix, PopularMovieFavorite, PopularMovieId, PopularMovieImage, PopularMovieTitle, PopularMoviesCard } from "../../app/styles";
import { useState } from "react";
import { insertPopularMovies } from "../../services/firebase";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export interface PopularMovieCardProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    };
}

export function PopularMovieCard({ movie }: PopularMovieCardProps) {

    const [isFavorite, setIsFavorite] = useState(false);

    const setFavorite = () => {
        setIsFavorite(!isFavorite);
        const userId = useLocalStorage("userData").getItem(0) as (string | null);

        const popularMovieFromArray: (string | null)[] = [userId, movie.title, isFavorite.toString()];

        insertPopularMovies(popularMovieFromArray);
    }

    return (
        <PopularMoviesCard>
            <PopularMovieCardFix>
                <PopularMovieTitle>{movie.title}</PopularMovieTitle>
                <PopularMovieFavorite onClick={setFavorite}>
                    { isFavorite ? "❤️" : "🤍" }
                </PopularMovieFavorite>
            </PopularMovieCardFix>
    
            <Link to={`/popular/movie/detail/${movie.id}`}>
                <PopularMovieId>{movie.id}</PopularMovieId>
                <PopularMovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            </Link>
        </PopularMoviesCard>
    );
}
