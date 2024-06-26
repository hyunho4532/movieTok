import { useEffect } from "react";
import { discoverStore } from "../features/store";
import { getMovies } from "../services/firebase";
import { Card } from "@mui/material";
import { Grid, MovieContent, MovieTitle, SelectSection, Title } from "../app/styles";

export function MoviePage() {

    const { movieList, setMovieList } = discoverStore();
    
    useEffect(() => {
        getMovies(setMovieList);
    })

    return (
        <>
            <SelectSection>
                <Title>사람들이 추천한 영화들</Title>
                <Grid>
                    { movieList?.map((movie, index) => (
                        <Card key={index} className="w-[240px] h-[200px] mt-[32px]">
                            <MovieTitle>{movie.title}</MovieTitle>
                            <MovieContent>
                                {movie.impressionMovie}
                            </MovieContent>
                        </Card>
                    ))}
                </Grid>
            </SelectSection>
        </>
    )
}   