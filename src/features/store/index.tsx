import { create } from "zustand";
import { User } from "../../entities/user/model/user";
import { Dialog } from "../../components/dialog/modal/dialog";
import { PopularMovie } from "../../entities/movie/model/PopularMovie";

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

export const dialogStore = create<Dialog>((set) => ({
    isOpen: false,
    isInfoOpen: false,

    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    setIsInfoOpen: (isInfoOpen: boolean) => set({ isInfoOpen })
}));

export const popularMovieStore = create<PopularMovie>((set) => ({
    isFavorite: false,
    setIsFavorite: (isFavorite: boolean) => set({ isFavorite })
}));