import { useState } from "react";
import { Input, RecommandMovieArticle, RecommandMovieSection } from "../../../app/styles";
import { AxiosInstance } from "../../../shared/axios";
import { RecommandMovieItems } from "../../../components/items/RecommandMovieItems";



export function RecommandMoviePage() {

    const [recommandMovie, setRecommandMovie] = useState<any[]>([]);

    const movieInputChange = (event: any) => {
        if (event.target.value.length === 0) {
            setRecommandMovie([]);
            return;
        }

        AxiosInstance("search").get(`/movie?query=${event.target.value}&include_adult=false&language=en-US&page=1`)
            .then(response => {
                setRecommandMovie(response.data.results);
            })
    }

    return (
        <RecommandMovieSection>
            <RecommandMovieArticle>
                <div style={{ margin: "0 auto" }}>
                    <Input
                        width="540px" 
                        height="42px" 
                        radius="16px" 
                        placeholder="영화 이름을 입력하세요!"
                        onChange={(movie) => movieInputChange(movie)} />
                </div>

                <RecommandMovieItems recommandMovieData={recommandMovie} />

            </RecommandMovieArticle>
        </RecommandMovieSection>
    )
} 