import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../../firebase.config";

export async function firebaseStoreInsert(email: string) {
    try {
        await addDoc(collection(db, "users"), {
            email: email
        });
        
        console.log("유저 데이터에 성공적으로 넣었습니다.");
    } catch (e) {
        console.error("유저 데이터에 넣는 도중 에러가 발생했습니다.", e);
    }
}