import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../../../firebase.config";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useStore } from "../../../features/store/useStore";

export const googleLoginSetUp = async () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            if (data != null) {
                const userDataFromArray = [ data.user.email, data.user.displayName ];

                if (userDataFromArray != null) {
                    useLocalStorage("userData").setItem(userDataFromArray);
                    useStore.getState().setUserData(userDataFromArray[0], userDataFromArray[1]);
                }
            }
        })
}