
import { Link } from "react-router-dom";
import { PopularMovieCardFix, PopularMovieFavorite, PopularMoviesCard } from "../../app/styles";
import { PopularMovieCardProps } from "./props/PopularMovieCardProps";

export function PopularMovieCard({ movie }: PopularMovieCardProps) {
    return (
        <PopularMoviesCard>
            <Link to={`http://localhost:5173/popular/movie/detail/${movie.id}`}>
                <PopularMovieCardFix>
                    {movie.title.length > 13 ?
                        <p className="text-start px-2 pt-2">{movie.title.substring(0, 13)}</p> :
                        <p className="text-start px-2 pt-2">{movie.title}</p>
                    }

                    <PopularMovieFavorite>❤️</PopularMovieFavorite>
                </PopularMovieCardFix>

                <p className="invisible">{movie.id}</p>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width="300" height="400" />
            </Link>
        </PopularMoviesCard>
    );
}
