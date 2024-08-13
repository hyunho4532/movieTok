import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MainPage } from "../pages/MainPage";
import { PopularMovieDetailPage } from "../pages/movie/detail/PopularMovieDetailPage";
import { InsertPage } from "../pages/InsertPage";
import { InsertMoviePage } from "../pages/movie/insert/InsertMoviePage";
import { MoviePage } from "../pages/MoviePage";
import { MyMoviePage } from "../pages/MyMoviePage";
import { SuggestMoviePage } from "../pages/movie/SuggestMoviePage";

export const router = createBrowserRouter ([
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/popular/movie/detail/:id",
        element: <PopularMovieDetailPage />
    },
    {
        path: "/insert",
        element: <InsertPage />
    },
    {
        path: "/insert/movie",
        element: <InsertMoviePage />
    },
    {
        path: "/movie",
        element: <MoviePage />
    },
    {
        path: "/users/movie",
        element: <MyMoviePage />
    },
    {
        path: "/movie/suggest",
        element: <SuggestMoviePage />
    }
  ])