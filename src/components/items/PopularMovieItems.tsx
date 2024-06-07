import { PopularMovieCard } from "../card/PopularMovieCard";
import { PopularMovieItemsProps } from "./props/PopularMovieItemsProps";

export function PopularMovieItems(props: PopularMovieItemsProps) {
    return (
        <div className="overflow-x-scroll ml-[340px]">
            <div className="flex w-[4800px] h-[300] mt-[16px]">
                {props.popularMovie.map((movie: any, index: any) => (
                    <PopularMovieCard key={index}>
                        { movie.title.length > 23 ?
                        <p className="text-start px-2 pt-2">{movie.title.substring(0, 23)}</p> :
                        <p className="text-start px-2 pt-2">{movie.title}</p> }
                        
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} loading="lazy" />
                    </PopularMovieCard>
                ))}
            </div>
        </div>
    );
}