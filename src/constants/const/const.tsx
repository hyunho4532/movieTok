export const TMDB_BASE_URL = (type: string) => type === 'movie' ? "https://api.themoviedb.org/3/movie" : "https://api.themoviedb.org/3/person"
export const SERVER_BASE_URL = "http://localhost:3000";

export const TMDB_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjVmZDI3NWVlNTExMWVkNDkzNDVjOTE2YzQ2YzE3NyIsInN1YiI6IjY0MTlhYjgwMGQ1ZDg1MDBiYTEwZDU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZEX0iX9VfINBnA7RmKA-ImdpxtWyaU1nKl_rvg22KU";

export const GOOGLE_CLIENT_ID = "961316880043-ec5mlrv2deei4an6b20g7fdsuhvoshmv.apps.googleusercontent.com"
export const REDIRECT_URI = "http://localhost:5173"
export const GOOGLE_CLIENT_SCOPE = "https://www.googleapis.com/auth/userinfo.email"

export const GOOGLE_REDIRECT_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${GOOGLE_CLIENT_SCOPE}`;