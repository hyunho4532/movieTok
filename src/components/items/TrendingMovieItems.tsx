export function TrendingMovieItems(props: TrendingMovieItemsProps) {

    console.log(props.trendingMovieData);

    return (
        <>
            {
                props.trendingMovieData.map((movie: any, index: number) => (
                    <p key={index}>{movie.title}</p>
                ))
            }
        </>
    )
}