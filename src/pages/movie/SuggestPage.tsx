import { SuggestMovieArticle, SuggestMovieSection } from "../../app/styles";
import { useNavigate } from "react-router-dom";

export function SuggestPage() {

    const navigate = useNavigate();

    const setOnPopup = () => {
        navigate("/movie/suggest");
    }

    return (
        <>
            <SuggestMovieSection>
                <SuggestMovieArticle>
                    <h1 className="text-center text-xl font-bold">유연한 추천 영화 생성</h1>
                    <button
                        style={{ width: '200px', height: '40px' }}
                        className="bg-blue-500 mt-6 shadow-lg shadow-blue-500/50 text-slate-100"
                        onClick={setOnPopup}>영화 추천 받기 🤩</button>
                </SuggestMovieArticle>
            </SuggestMovieSection>
        </>
    )
}