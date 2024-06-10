import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getPopularMovieDetail } from "../../../entities/movie/api";
import { MovieLoading, PopularMovieDetail, PopularMovieDetailName } from "../../../app/styles";

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
                    <PopularMovieDetailName>영화 이름: {popularMovieByIdData.title}</PopularMovieDetailName>
                </PopularMovieDetail> :

                <MovieLoading>영화 데이터를 잠깐 불러오고 있습니다!</MovieLoading>
            }
        </>
    )
}