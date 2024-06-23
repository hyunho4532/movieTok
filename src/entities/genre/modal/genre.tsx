export type Genre = {
    genreList: any[] | null,
    setGenreList: React.Dispatch<any>,
    selectedGenre: null,
    setSelectedGenre: (selectedGenre: any) => void
}