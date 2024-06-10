import { Link } from "react-router-dom";
import { PopularMovieCard } from "../card/PopularMovieCard";
import { PopularMovieItemsProps } from "./props/PopularMovieItemsProps";
import { PopularMovieItem, PopularMovieItemFix } from "../../app/styles";

export function PopularMovieItems(props: PopularMovieItemsProps) {
    return (
        <PopularMovieItem>
            <PopularMovieItemFix>
                {props.popularMovie.map((movie: any, index: any) => (
                    <PopularMovieCard key={index}>
                        <Link to={`http://localhost:5173/popular/movie/detail/${movie.id}`}>
                            { movie.title.length > 13 ?
                                <p className="text-start px-2 pt-2">{movie.title.substring(0, 13)}</p> :
                                <p className="text-start px-2 pt-2">{movie.title}</p> }
                                <p className="invisible">{movie.id}</p>
                                
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} loading="lazy" />
                        </Link>
                    </PopularMovieCard>
                ))}
            </PopularMovieItemFix>
        </PopularMovieItem>
    );
}