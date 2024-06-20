import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../../../firebase.config";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { dialogStore, userStore } from "../../../features/store";

export const googleLoginSetUp = async () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            if (data != null) {
                if (auth.currentUser?.uid != null) {
                    const userDataFromArray = [ auth.currentUser.uid, data.user.email, auth.currentUser.photoURL, data.user.displayName ];

                    if (userDataFromArray != null) {
                        useLocalStorage("userData").setItem(userDataFromArray!);
                        userStore.getState().setUserData(userDataFromArray[0]!, userDataFromArray[1]!, userDataFromArray[2]!, userDataFromArray[3]!);
                        dialogStore.getState().setIsOpen(false);
                        dialogStore.getState().setIsInfoOpen(true);
                    }
                }
            }
        })
}