import { create } from "zustand";
import { User } from "../../entities/user/model/User";

export const useStore = create<User>((set) => ({
    email: null, 
    nickname: null,

    setEmail: (email: string | null) => set({ email }),
    setNickname: (nickname: string | null) => set({ nickname })
})); 