import { Card } from "@mui/material";
import { PopularMovieCardProps } from "./props/PopularMovieCardProps";

export function PopularMovieCard({ children }: PopularMovieCardProps) {
    return (
        <Card className="mr-[16px] w-[200px] hover:w-[220px] hover:font-bold hover:text-black hover:text-lg">
            {children}
        </Card>
    );
}
