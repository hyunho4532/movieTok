import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getPopularMovieDetail, getPopularMovieDetailActors, getPopularMovieDetailVideos } from "../../../entities/movie/api";
import { MovieLoading, PopularMovieDetail, PopularMovieDetailActors, PopularMovieDetailActorSection, PopularMovieDetailVideoSection, PopularMovieDetailVideos } from "../../../app/styles";
import { PopularActorDetailItems } from "../../../components/items/PopularActorDetailItems";
import { PopularVideoDetailItems } from "../../../components/items/PopularVideoDetailItems";
import { PopularMovieDetailTitleSections } from "../../../components/sections/PopularMovieDetailTitleSections";
import { PopularMovieDetailContentSections } from "../../../components/sections/PopularMovieDetailContentSections";

export function PopularMovieDetailPage() {
    
    const [popularMoviesByIdData, setPopularMoviesByIdData] = useState<any>([]);
    const [popularActorsByIdData, setPopularActorsByIdData] = useState([]);
    const [popularVideosByIdData, setPopularVideosByIdData] = useState([]);

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

        getPopularMovieDetailVideos(id!)
            .then(data => {
                setPopularVideosByIdData(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [id]);

    return (
        <>
            { popularMoviesByIdData != '' ?
                <PopularMovieDetail>
                    <PopularMovieDetailTitleSections 
                        title={popularMoviesByIdData.title}
                        overview={popularMoviesByIdData.overview}>
                    </PopularMovieDetailTitleSections>

                    <PopularMovieDetailContentSections
                        vote_average={popularMoviesByIdData.vote_average}
                        poster_path={popularMoviesByIdData.poster_path}>
                    </PopularMovieDetailContentSections>

                    <PopularMovieDetailVideoSection>
                        <PopularMovieDetailVideos>해당 영화와 관련된 영상들을 찾아왔어요!!</PopularMovieDetailVideos>
                        <PopularVideoDetailItems popularVideo={popularVideosByIdData} />
                    </PopularMovieDetailVideoSection>

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