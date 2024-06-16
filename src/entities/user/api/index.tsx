import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../../../firebase.config";

export const googleLoginSetUp = async () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            console.log(data)
        })
}