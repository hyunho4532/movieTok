import { TrendingMovieCardFix, TrendingMovieImage, TrendingMoviesCard, TrendingMovieTitle } from "../../app/styles";

export interface TrendingMovieCardProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    };
}

export function TrendingMovieCard({ movie }: TrendingMovieCardProps) {

    return (
        <TrendingMoviesCard>
            <TrendingMovieCardFix>
                <TrendingMovieTitle>{movie.title}</TrendingMovieTitle>
            </TrendingMovieCardFix>

            <TrendingMovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
        </TrendingMoviesCard>
    );
}