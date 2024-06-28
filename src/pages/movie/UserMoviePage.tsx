import { Card } from "@mui/material";
import { UserMovieArticle, UserMovieSection } from "../../app/styles";
import { UserMovieProps } from "./props/UserMovieProps";

export function UserMoviePage(movieList: UserMovieProps) {
    return (
        <>
            <UserMovieSection>
                <UserMovieArticle>
                    <h1 className="text-center text-xl font-bold">사용자가 등록한 영화들</h1>
                    { movieList.userMovie?.map((value: any, index: any) => (
                        <Card key={index}>
                            <p>{value.title}</p>
                        </Card>
                    ))}
                </UserMovieArticle>
            </UserMovieSection>
        </>
    )
}