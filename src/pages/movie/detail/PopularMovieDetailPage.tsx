import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getPopularMovieDetail, getPopularMovieDetailActors } from "../../../entities/movie/api";
import { MovieLoading, PopularMovieDetail, PopularMovieDetailImage, PopularMovieDetailTitleSection, PopularMovieDetailTitle, PopularMovieDetailActors, PopularMovieDetailVoteAvg, PopularMovieDetailSubTitle, PopularMovieDetailContentSection, PopularMovieDetailActorSection } from "../../../app/styles";
import { PopularActorDetailItems } from "../../../components/items/PopularActorDetailItems";

export function PopularMovieDetailPage() {
    
    const [popularMoviesByIdData, setPopularMoviesByIdData] = useState<any>([]);
    const [popularActorsByIdData, setPopularActorsByIdData] = useState([]);

    const { id } = useParams<{id: string}>();

    useEffect(() => {
        getPopularMovieDetail(id!)
            .then(data => {
                setPopularMoviesByIdData(data);
            })
            .catch(error => {
                console.error(error)
            })

        getPopularMovieDetailActors(id!)
            .then(data => {
                setPopularActorsByIdData(data);
            })
            .catch(error => {
                console.error(error);
            })

        console.log(popularMoviesByIdData);

    }, [id]);

    return (
        <>
            { popularMoviesByIdData != '' ?
                <PopularMovieDetail>
                    <PopularMovieDetailTitleSection>
                        <PopularMovieDetailTitle>{popularMoviesByIdData.title}</PopularMovieDetailTitle>
                        <PopularMovieDetailSubTitle>{popularMoviesByIdData.overview}</PopularMovieDetailSubTitle>
                    </PopularMovieDetailTitleSection>

                    <PopularMovieDetailContentSection>
                        <PopularMovieDetailVoteAvg>❤ {popularMoviesByIdData.vote_average}</PopularMovieDetailVoteAvg>
                        <PopularMovieDetailImage src={`https://image.tmdb.org/t/p/original/${popularMoviesByIdData.poster_path}`}></PopularMovieDetailImage>
                    </PopularMovieDetailContentSection>

                    <PopularMovieDetailActorSection>
                        <PopularMovieDetailActors>이 영화에 등장한 인물들</PopularMovieDetailActors>
                        <PopularActorDetailItems popularActor={popularActorsByIdData} />
                    </PopularMovieDetailActorSection>

                </PopularMovieDetail> : 

                <MovieLoading>영화 데이터를 잠깐 불러오고 있습니다!</MovieLoading>
            }
        </>
    )
}