export const TMDB_BASE_URL = (type: string) => 
    type === 'movie' ? "https://api.themoviedb.org/3/movie" : 
    type === 'actor' ? "https://api.themoviedb.org/3/person" : 
    type === 'genre' ? "https://api.themoviedb.org/3/genre" :
    type === 'discover' ? "https://api.themoviedb.org/3/discover" 
                        : "https://api.themoviedb.org/3/trending/"
    
export const SERVER_BASE_URL = "http://localhost:3000";

export const TMDB_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjVmZDI3NWVlNTExMWVkNDkzNDVjOTE2YzQ2YzE3NyIsInN1YiI6IjY0MTlhYjgwMGQ1ZDg1MDBiYTEwZDU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZEX0iX9VfINBnA7RmKA-ImdpxtWyaU1nKl_rvg22KU";

export const GOOGLE_CLIENT_ID = "961316880043-ec5mlrv2deei4an6b20g7fdsuhvoshmv.apps.googleusercontent.com"
export const REDIRECT_URI = "http://localhost:5173"
export const GOOGLE_CLIENT_SCOPE = "https://www.googleapis.com/auth/userinfo.email"

export const GOOGLE_REDIRECT_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${GOOGLE_CLIENT_SCOPE}`;

export const MOVIE_CATEGORY_LIST = ["액션", "코미디", "드라마", "로맨스", "스릴러", "기타"]
export const MOVIE_PLATFORM_LIST = ["넷플릭스", "Disney+", "왓챠", "티빙"]
export const MOVIE_STATUS_LIST = ["좋아하는 편", "보통", "싫어하는 편"]

export const movieKeywords = [
    {
        key: 1,
        title: '액션'
    },
    {
        key: 2,
        title: '코미디'
    },
    {
        key: 3,
        title: '드라마'
    },
    {
        key: 4,
        title: '로맨스'
    },
    {
        key: 5,
        title: '스릴러'
    },
    {
        key: 6,
        title: '공포'
    },
    {
        key: 7,
        title: '애니메이션'
    }
];