export interface User {
    email: string | null;
    nickname: string | null;
    setEmail: (email: string | null) => void;
    setNickname: (nickname: string | null) => void;
}