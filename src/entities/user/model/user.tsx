export interface User {
    uid: string | null;
    email: string | null;
    profile_picture: string | null,
    nickname: string | null;
    status: string | null;
    platform: string | null;
    genre: string | null

    setUserData: (uid: string, email: string, profile_picture: string, nickname: string) => void;
    setStatus: (status: string | null) => void;
    setPlatform: (platform: string | null) => void;
    setGenre: (genre: string | null) => void;
}