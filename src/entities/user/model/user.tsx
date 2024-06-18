export interface User {
    email: string | null;
    nickname: string | null;
    status: string | null;
    platform: string | null;
    genre: string | null

    setUserData: (email: string | null, nickname: string | null) => void;
    setStatus: (status: string | null) => void;
    setPlatform: (platform: string | null) => void;
    setGenre: (genre: string | null) => void;
}