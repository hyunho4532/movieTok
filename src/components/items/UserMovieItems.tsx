import { UserMovieItem, UserMovieItemFix } from "../../app/styles";
import { UserMovieCard } from "../card/UserMovieCard";
import { UserMovieItemsProps } from "./props/UserMovieItemsProps";

export function UserMovieItems(props: UserMovieItemsProps) {

    return (
        <UserMovieItem>
            <UserMovieItemFix>
                {props.userMovieData?.map((movie: any, index: any) => {
                    const movieTitle = movie.title.length > 13 ? movie.title.substring(0, 13) : movie.title
                    return <UserMovieCard key={index} movie={{ ...movie, title: movieTitle }} />
                })}
            </UserMovieItemFix>
        </UserMovieItem>
    )
}