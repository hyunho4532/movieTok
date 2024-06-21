import { doc, setDoc } from "firebase/firestore"; 
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

export async function insertPopularMovies() {
    try {
        
    } catch (e) {
        toastFailure("인기 영화 등록 실패!");
    }
}