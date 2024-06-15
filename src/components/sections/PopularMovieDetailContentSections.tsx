import { PopularMovieDetailContentSection, PopularMovieDetailImage, PopularMovieDetailVoteAvg } from "../../app/styles";

export function PopularMovieDetailContentSections({ vote_average, poster_path } : { vote_average: string, poster_path: string }) {
    return (
        <PopularMovieDetailContentSection>
            <PopularMovieDetailVoteAvg>❤ {vote_average}</PopularMovieDetailVoteAvg>
            <PopularMovieDetailImage src={`https://image.tmdb.org/t/p/original/${poster_path}`}></PopularMovieDetailImage>
        </PopularMovieDetailContentSection>
    )
}