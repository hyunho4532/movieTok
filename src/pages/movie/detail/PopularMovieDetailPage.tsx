import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getPopularMovieDetail } from "../../../entities/movie/api";

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
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <p className="text-lg font-bold">영화 이름: {popularMovieByIdData.title}</p>
                </div> :

                <p style={{ transform: 'translate(-50%, -50%)' }}>영화 데이터를 잠깐 불러오고 있습니다!</p> }
            
        </>
    )
}