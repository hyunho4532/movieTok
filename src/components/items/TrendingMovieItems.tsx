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
                    return <TrendingMovieCard movie={movie} />
                })}
            </TrendingMovieItemFix>
        </TrendingMovieItem>
    )
}