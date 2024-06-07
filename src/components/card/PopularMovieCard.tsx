import { Card } from "@mui/material";
import { PopularMovieCardProps } from "./props/PopularMovieCardProps";

export function PopularMovieCard({ children }: PopularMovieCardProps) {
    return (
        <Card className="mr-[16px] w-[400px]">
            {children}
        </Card>
    );
}
