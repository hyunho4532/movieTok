import { UserMovieArticle, UserMovieSection } from "../../app/styles";
import { UserMovieProps } from "./props/UserMovieProps";
import { UserMovieItems } from "../../components/items/UserMovieItems";

export function UserMoviePage({userMovie}: UserMovieProps) {
    return (
        <>
            <UserMovieSection>
                <UserMovieArticle>
                    <h1 className="text-center text-xl font-bold">사용자가 등록한 영화를 조회했어요</h1>
                    <UserMovieItems userMovieData={userMovie} />
                </UserMovieArticle>
            </UserMovieSection>
        </>
    )
}