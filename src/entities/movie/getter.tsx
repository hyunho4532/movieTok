import { getPopularActors, getPopularMovies, getTrendingMovies } from "./api";

export const popularMovieData = getPopularMovies()
    .then(data => {
        return data
    })
    .catch(error => {
        return error;
    })


export const trendingMovieData = getTrendingMovies()
    .then(data => {
        return data
    })
    .catch(error => {
        return error;
    })


export const popularActorData = getPopularActors()
    .then(data => {
        console.log(data);
        return data
    })
    .catch(error => {
        return error;
    })