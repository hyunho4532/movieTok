import { CardFix, RecommandMovieImg, RecommandMoviesCard, RecommandMovieTitle } from "../../app/styles";

export interface RecommandMovieCardProps {
    recommandMovieData: {
        title: string,
        backdrop_path: string
    }
}

export function RecommandMovieCard({ recommandMovieData }: RecommandMovieCardProps) {
    return (
        <RecommandMoviesCard>
            <CardFix>
                <RecommandMovieTitle>
                    { recommandMovieData.title.length > 14 ? `${recommandMovieData.title.substring(0, 14)}...` : recommandMovieData.title }
                </RecommandMovieTitle>

                <RecommandMovieImg src={`http://image.tmdb.org/t/p/w500/${recommandMovieData.backdrop_path}`} />
            </CardFix>
        </RecommandMoviesCard>
    )
}