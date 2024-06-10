import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getPopularMovieDetail } from "../../../entities/movie/api";
import { MovieLoading, PopularMovieDetail, PopularMovieDetailImage, PopularMovieDetailHomePage, PopularMovieDetailTitle, PopularMovieDetailActors } from "../../../app/styles";

export function PopularMovieDetailPage() {
    
    const [popularMovieByIdData, setPopularMovieByIdData] = useState<any>([]);

    const { id } = useParams<{id: string}>();

    useEffect(() => {
        getPopularMovieDetail(id!)
            .then(data => {
                setPopularMovieByIdData(data);
            })
            .catch(error => {
                console.error(error)
            })

    }, [id]);

    return (
        <>
            { popularMovieByIdData != '' ?
                <PopularMovieDetail>
                    <PopularMovieDetailTitle>영화 이름: {popularMovieByIdData.title}</PopularMovieDetailTitle>
                    <PopularMovieDetailHomePage href="">{popularMovieByIdData.homepage}</PopularMovieDetailHomePage>
                    <PopularMovieDetailImage src={`https://image.tmdb.org/t/p/original/${popularMovieByIdData.poster_path}`}></PopularMovieDetailImage>

                    <PopularMovieDetailActors>이 영화에 등장한 인물들</PopularMovieDetailActors>
                </PopularMovieDetail> : 

                <MovieLoading>영화 데이터를 잠깐 불러오고 있습니다!</MovieLoading>
            }
        </>
    )
}