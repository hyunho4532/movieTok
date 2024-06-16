import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../../../firebase.config";
import { useStore } from "../../../features/store/useStore";

export const googleLoginSetUp = async () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            if (data != null) {
                useStore.getState().setEmail(data.user.email);
            }
        })
}