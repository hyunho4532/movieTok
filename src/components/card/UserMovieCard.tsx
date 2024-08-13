
import { UserMovieCardFix, UserMovieTitle, UserMoviesCard } from "../../app/styles";

export interface UserMovieCardProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    };
}

export function UserMovieCard({ movie }: UserMovieCardProps) {
    return (
        <UserMoviesCard>
            <UserMovieCardFix>
                <UserMovieTitle>{movie.title}</UserMovieTitle>
            </UserMovieCardFix>
        </UserMoviesCard>
    );
}
