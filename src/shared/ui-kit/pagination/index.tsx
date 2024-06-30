import { Pagination } from "@mui/material";
import { genreStore, paginationStore } from "../../../features/store";
import { fetchMovies } from "../../../entities/discover/getter";
import { PaginationProps } from "./props/PaginationProps";

export function CustomPagination(props: PaginationProps) {

    const { totalMovies, currentPage, setCurrentPage } = paginationStore()
    const { selectedGenre } = genreStore();

    const handlePageChange = (event: any, value: any) => {
        console.log(event);
        setCurrentPage(value);
        fetchMovies(props.setDiscoverList, props.setTotalMovies, selectedGenre, value);
    }

    return (
        <>
            <Pagination
                count={Math.ceil(totalMovies / 20)}
                page={currentPage} 
                onChange={handlePageChange} />
        </>
    )
}