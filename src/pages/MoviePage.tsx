import { useEffect } from "react";
import { discoverStore } from "../features/store";
import { getMovies } from "../services/firebase";
import { Card } from "@mui/material";
import { Grid, MovieContent, MovieStatus, MovieTitle, SelectSection, Title } from "../app/styles";
import { marked } from 'marked';

export function MoviePage() {

    const { movieList, setMovieList } = discoverStore();
    
    const markdownToHTML = (markdownText: any) => {
        return marked(markdownText);
    }

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
                                { movie.impressionMovie.length > 8 ?
                                    <div dangerouslySetInnerHTML={{__html: markdownToHTML(movie.impressionMovie.substring(0, 8) + "...")}}></div> :
                                    <div dangerouslySetInnerHTML={{__html: markdownToHTML(movie.impressionMovie)}}></div>}

                                <MovieStatus>
                                    <div className="text-right mt-20 mr-2 text-xs">영화 재미: {movie.movieIsFun}</div>   
                                    <div className="text-right mt-20 mr-2 text-xs">영화 추천: {movie.movieIsRecom}</div>                                   
                                </MovieStatus>
                            </MovieContent>
                        
                        </Card>
                    ))}
                </Grid>
            </SelectSection>
        </>
    )
}   