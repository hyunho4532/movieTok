import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import { db } from "../../../firebase.config";
import { toastFailure, toastSuccess } from "../../shared/ui-kit/toast";
import { todayDate } from "../../hooks/todayDate";

export async function insertUsers(users: (string | null)[]) {
    try {
        await setDoc(doc(db, "users", users[0]!), {
            email: users[1],
            nickname: users[2],
            movie_genre: users[3],
            movie_platform: users[4],
            movie_status: users[5]
        });
        
        toastSuccess("사용자 등록 완료!");

    } catch (e) {
        toastFailure("사용자 등록 실패!");
        console.error(e);
    }
}

export async function insertPopularMovies(popularMovies: (string | null)[]) {
    try {
        if (popularMovies[2] === "false") {
            await addDoc(collection(db, "popularMovies"), {
                userId: popularMovies[0],
                title: popularMovies[1],
                status: popularMovies[2]
            });
    
            toastSuccess("즐겨 찾기로 등록했어요! 😂");
        } else {
            const selectPopularMovie = query(collection(db, "popularMovies"), 
            where (
                "userId", "==", popularMovies[0]
            ), where (
                "title", "==", popularMovies[1]
            ));

            getDocs(selectPopularMovie).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    deleteDoc(doc.ref).then(() => {
                        toastSuccess("즐겨 찾기에서 삭제했어요! 🤣");
                    }).catch(() => {
                        toastSuccess("즐겨 찾기에서 삭제 중 오류가 발생했어요!");
                    })
                });
            }).catch((error) => {
                console.error(error);
            });
        }

    } catch (e) {
        toastFailure("인기 영화 등록 실패!");
        console.error(e);
    }
}

export async function insertMovies(movies: (string | null)[]) {

    const today = todayDate();

    console.log(today);

    try {
        await addDoc(collection(db, "movies"), {
            authuid: movies[0],
            title: movies[1],
            impressionMovie: movies[2],
            movieIsFun: movies[3],
            movieIsRecom: movies[4],
            todayDate: today,
        })

        toastSuccess("영화 등록했어요! 😂");

    } catch (e) {
        toastFailure("영화 등록 실패!");
        console.error(e);
    }
}

export async function getMovies(setMovie: any) {
    try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const movies: any[] = [];

        querySnapshot.forEach((doc) => {
            movies.push({ id: doc.id, ...doc.data() });
        });

        setMovie(movies);
        
    } catch (e) {
        console.error(e);
    }
}

export async function getMoviesFromAuthUid(setMovie: any, authuid: any) {
    try {
        const movieQuery = query (
            collection(db, "movies"),
            where("authuid", "==", authuid)
        );

        const querySnapshot = await getDocs(movieQuery);
        const movies: any[] = [];
        
        querySnapshot.forEach((doc) => {
            movies.push(doc.data());
        });

        setMovie(movies);
        
    } catch (e) {
        console.error(e);
    }
}