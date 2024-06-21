import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import { db } from "../../../firebase.config";
import { toastFailure, toastSuccess } from "../../shared/ui-kit/toast";

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
    }
}

export async function insertPopularMovies(popularMovies: (string | null)[]) {
    try {
        if (popularMovies[2] === "false") {
            await addDoc(collection(db, "popularMovies"), {
                userId: popularMovies[0],
                title: popularMovies[1]
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
    }
}