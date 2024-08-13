import { UserMovieArticle, UserMovieSection } from "../../app/styles";
import { UserMovieItems } from "../../components/items/UserMovieItems";

export interface UserMovieProps {
    userMovie: any[]
}

export function UserMoviePage({userMovie}: UserMovieProps) {
    return (
        <>
            <UserMovieSection>
                <UserMovieArticle>
                    <h1 className="text-center text-xl font-bold">사용자가 등록한 영화들</h1>
                    <UserMovieItems userMovieData={userMovie} />
                </UserMovieArticle>
            </UserMovieSection>
        </>
    )
}