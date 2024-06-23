export type Pagination = {
    totalMovies: number,
    setTotalMovies: (totalMovies: number) => void,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
}