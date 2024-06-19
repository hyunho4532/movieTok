import { create } from "zustand";
import { User } from "../../entities/user/model/user";
import { Dialog } from "../../components/dialog/modal/dialog";

export const userStore = create<User>((set) => ({
    uid: null,
    email: null, 
    nickname: null,
    status: null,
    platform: null,
    genre: null,

    setUserData: (uid: string | null, email: string | null, nickname: string | null) => set({ uid, email, nickname }),
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