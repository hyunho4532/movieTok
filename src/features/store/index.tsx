import { create } from "zustand";
import { User } from "../../entities/user/model/user";
import { Dialog } from "../../components/dialog/modal/dialog";
import { PopularMovie } from "../../entities/movie/model/PopularMovie";
import { Pagination } from "../../shared/ui-kit/pagination/model/Pagination";
import { Genre } from "../../entities/genre/modal/genre";
import { Discover } from "../../entities/discover/modal/discover";

export const userStore = create<User>((set) => ({
    uid: null,
    email: null,
    profile_picture: null,
    nickname: null,
    status: null,
    platform: null,
    genre: null,

    setUserData: (uid: string, email: string, profile_picture: string,  nickname: string) => set({ uid, email, profile_picture, nickname }),
    setStatus: (status: string | null) => set({ status }),
    setPlatform: (platform: string | null) => set({ platform }),
    setGenre: (genre: string | null) => set({ genre }),
})); 

export const discoverStore = create<Discover>((set) => ({
    discoverList: null,
    setDiscoverList: (discoverList) => set({ discoverList }),
    movieList: null,
    setMovieList: (movieList) => set({ movieList }),
    userMovieList: null,
    setUserMovieList: (userMovieList) => set({ userMovieList }),
    discoverTitle: null,
    setDiscoverTitle: (discoverTitle: string) => set({ discoverTitle }),
    movieisFun: null,
    setMovieIsFun: (movieisFun: string) => set({ movieisFun }),
    impressionMovie: null,
    setImpressionMovie: (impressionMovie: string) => set({ impressionMovie }),
    movieIsRecom: null,
    setMovieIsRecom: (movieIsRecom: string) => set({movieIsRecom}),
    id: 0,
    title: "",
}));

export const genreStore = create<Genre>((set) => ({
    genreList: null,
    setGenreList: (genreList) => set({ genreList }),
    selectedGenre: null,
    setSelectedGenre: (selectedGenre) => set({ selectedGenre })
}));

export const paginationStore = create<Pagination>((set) => ({
    totalMovies: 0,
    setTotalMovies: (totalMovies: number) => set({ totalMovies }),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({ currentPage }),
}));

export const dialogStore = create<Dialog>((set) => ({
    isOpen: false,
    isRouletteOpen: false,
    isInfoOpen: false,

    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    setIsRouletteOpen: (isRouletteOpen: boolean) => set({ isRouletteOpen }),
    setIsInfoOpen: (isInfoOpen: boolean) => set({ isInfoOpen })
}));

export const popularMovieStore = create<PopularMovie>((set) => ({
    isFavorite: false,
    setIsFavorite: (isFavorite: boolean) => set({ isFavorite })
}));