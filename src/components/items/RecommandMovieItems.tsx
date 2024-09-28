import { RecommandMovieItem, RecommandMovieItemFix } from "../../app/styles";
import { RecommandMovieCard } from "../card/RecommandMovieCard";

export interface RecommandMovieProps {
    recommandMovieData: any[]
}

export function RecommandMovieItems(recommandMovieData: RecommandMovieProps) {
    return (
        <RecommandMovieItem>
            <RecommandMovieItemFix>
                { recommandMovieData.recommandMovieData.map((data: any) => (
                    <RecommandMovieCard recommandMovieData={data} />
                ))}
            </RecommandMovieItemFix>
        </RecommandMovieItem>
    );
}