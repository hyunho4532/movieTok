import { SuggestMovieArticle, SuggestMovieSection } from "../../app/styles";
import { movieKeywords } from "../../constants/const/const";


export function SuggestMoviePage() {

    return (
        <>
            <SuggestMovieSection>
                <SuggestMovieArticle>
                    <h1 className="text-center text-xl font-bold">원하시는 영화를 추천해드립니다.</h1>

                    <h2 className="text-center text-xl pt-20">1. 원하시는 장르를 선택해주세요!</h2>

                    <select className="">
                        { movieKeywords.map((data: any, key: number) => (
                            <option>{data.title}</option>
                        ))}
                    </select>
                </SuggestMovieArticle>
            </SuggestMovieSection>
        </>
    )
}