import { TrendingMovieItem, TrendingMovieItemFix } from "../../app/styles";
import { TrendingMovieCard } from "../card/TrendingMovieCard";

interface TrendingMovieItemsProps {
    trendingMovieData: any[];
}

export function TrendingMovieItems(props: TrendingMovieItemsProps) {
    return (
        <TrendingMovieItem>
            <TrendingMovieItemFix>
                { props.trendingMovieData.map((movie: any, index: number) => {
                    const movieTitle = movie.title.length > 13 ? `${movie.title.substring(0, 13)}...` : movie.title
                    return <TrendingMovieCard key={index} movie={{ ...movie, title: movieTitle }} />
                })}
            </TrendingMovieItemFix>
        </TrendingMovieItem>
    )
}