import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getPopularMovieDetail } from "../../../entities/movie/api";

export function PopularMovieDetailPage() {
    
    const [popularMovieByIdData, setPopularMovieByIdData] = useState<any[]>([]);

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
            <div>
                <h1>{popularMovieByIdData.id}</h1>
            </div>
        </>
    )
}