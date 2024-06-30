
import { UserMovieCardFix, UserMovieTitle, UserMoviesCard } from "../../app/styles";
import { UserMovieCardProps } from "./props/UserMovieCardProps";

export function UserMovieCard({ movie }: UserMovieCardProps) {
    return (
        <UserMoviesCard>
            <UserMovieCardFix>
                <UserMovieTitle>{movie.title}</UserMovieTitle>
            </UserMovieCardFix>
        </UserMoviesCard>
    );
}
