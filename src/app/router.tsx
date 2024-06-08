import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MainPage } from "../pages/MainPage";
import { PopularMovieDetailPage } from "../pages/movie/detail/PopularMovieDetailPage";

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
        path: "/popular/movie/detail",
        element: <PopularMovieDetailPage />
    }
  ])