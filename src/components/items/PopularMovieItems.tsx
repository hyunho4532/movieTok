import { PopularMovieItemsProps } from "./props/PopularMovieItemsProps";

export function PopularMovieItems(props: PopularMovieItemsProps) {
    return (
        <>
            { props.popularMovie.map((movie: any, index: any) => (
                <p key={index}>{movie.title}</p>
            ))}
        </>
    )
}