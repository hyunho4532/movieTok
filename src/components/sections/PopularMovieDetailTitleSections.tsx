import { PopularMovieDetailSubTitle, PopularMovieDetailTitle, PopularMovieDetailTitleSection } from "../../app/styles";

export function PopularMovieDetailTitleSections({ title, overview } : { title: string, overview: string }) {
    return (
        <PopularMovieDetailTitleSection>
            <PopularMovieDetailTitle>{title}</PopularMovieDetailTitle>
            <PopularMovieDetailSubTitle>{overview}</PopularMovieDetailSubTitle>
        </PopularMovieDetailTitleSection>
    )
}