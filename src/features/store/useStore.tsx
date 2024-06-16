import { create } from "zustand";
import { User } from "../../entities/user/model/User";

export const useStore = create<User>((set) => ({
    email: null, 
    nickname: null,

    setUserData: (email: string | null, nickname: string | null) => set({ email, nickname }),
})); 