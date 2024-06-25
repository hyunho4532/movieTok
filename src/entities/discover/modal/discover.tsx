export type Discover = {
    discoverList: any[] | null,
    setDiscoverList: React.Dispatch<any>,
    discoverTitle: string | null,
    setDiscoverTitle: (title: string) => void,
    movieisFun: string | null,
    setMovieIsFun: (movieisFun: string) => void,
    impressionMovie: string | null,
    setImpressionMovie: (impressionMovie: string) => void,
    movieIsRecom: string | null,
    setMovieIsRecom: (movieIsRecom: string) => void,
}