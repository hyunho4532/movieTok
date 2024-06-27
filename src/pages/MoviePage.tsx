import { useEffect } from "react";
import { discoverStore } from "../features/store";
import { getMovies } from "../services/firebase";
import { Card } from "@mui/material";
import { Grid, MovieContent, MovieDate, MovieStatus, MovieTitle, SelectSection, Title } from "../app/styles";

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
                        <Card key={index} className="w-[220px] h-[140px] mt-[32px]">
                            <MovieTitle>
                                { movie.title.length > 8 ? `${movie.title.substring(0, 16)}...` : `${movie.title}`}       
                            </MovieTitle>
                            <MovieContent>
                                <MovieStatus>
                                    <div className="text-right mt-8 mr-2 text-xs">영화 재미: {movie.movieIsFun}</div>   
                                    <div className="text-right mt-8 mr-2 text-xs">영화 추천: {movie.movieIsRecom}</div>                                   
                                </MovieStatus>

                                <MovieDate>
                                    등록한 날짜: { movie.todayDate }
                                </MovieDate>
                            </MovieContent>
                        
                        </Card>
                    ))}
                </Grid>
            </SelectSection>
        </>
    )
}   