import { SuggestMovieArticle, SuggestMovieSection } from "../../app/styles";

export function SuggestMoviePage() {
    return (
        <SuggestMovieSection>
            <SuggestMovieArticle>
                <h1 className="text-center text-xl font-bold">오늘 영화 추천좀 해줘</h1>
            </SuggestMovieArticle>
        </SuggestMovieSection>
    )
}