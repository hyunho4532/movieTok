export interface User {
    email: string | null;
    nickname: string | null;
    setUserData: (email: string | null, nickname: string | null) => void;
}