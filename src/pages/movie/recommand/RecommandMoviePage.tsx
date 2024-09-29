import { useState } from "react";
import { Input, RecommandMovieArticle, RecommandMovieSection } from "../../../app/styles";
import { AxiosInstance } from "../../../shared/axios";
import { RecommandMovieItems } from "../../../components/items/RecommandMovieItems";



export function RecommandMoviePage() {

    const [recommandMovie, setRecommandMovie] = useState<any[]>([]);

    const movieInputChange = (event: any) => {
        
        console.log(event.target.value.length);

        if (event.target.value.length === 0 && event.target.value === "") {
            setRecommandMovie([]);
        }

        AxiosInstance("search").get(`/movie?query=${event.target.value}&include_adult=false&language=ko-KR&page=1`)
            .then(response => {
                setRecommandMovie(response.data.results);
            })
    }

    return (
        <RecommandMovieSection>
            <RecommandMovieArticle>
                <div style={{ margin: "0 auto" }}>
                    <Input
                        width="620px" 
                        height="42px" 
                        radius="16px" 
                        placeholder="영화 이름을 입력하세요!"
                        onChange={(movie) => movieInputChange(movie)} />
                </div>

                { recommandMovie.length === 0 ? 
                    <p style={{ marginTop: "40px", fontWeight: "bold" }}>조회된 영화 내역이 없습니다.</p> 
                    : <RecommandMovieItems recommandMovieData={recommandMovie} /> }

            </RecommandMovieArticle>
        </RecommandMovieSection>
    )
} 