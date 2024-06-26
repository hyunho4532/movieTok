import { useEffect } from "react";
import { getMovies } from "../services/firebase"

export function MoviePage() {

    const getMovie = getMovies();
    
    useEffect(() => {
        console.log(getMovie);
    });

    return (
        <>

        </>
    )
}