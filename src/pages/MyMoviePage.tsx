import { Grid, MovieContent, MovieTitle, Section, Title } from "../app/styles";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getMoviesFromAuthUid } from "../services/firebase";
import { Card } from "@mui/material";
import { discoverStore } from "../features/store";

export function MyMoviePage() {

    const authuid = useLocalStorage("userData").getItem(0);
    const { userMovieList, setUserMovieList } = discoverStore();

    getMoviesFromAuthUid(setUserMovieList, authuid);

    return (
        <>
            <Section>
                <Title>내가 등록한 영화들을 확인해보세요!</Title>
                <Grid>
                    { userMovieList?.map((movie: any, index: any) => (
                        <Card key={index} className="w-[280px] h-[140px] mt-8">
                            <MovieTitle>{movie.title}</MovieTitle>
                            <MovieContent>{movie.movieIsRecom}</MovieContent>
                        </Card>
                    ))}
                </Grid>
            </Section>
        </>
    )
}