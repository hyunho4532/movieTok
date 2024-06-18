import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../../../firebase.config";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { dialogStore, userStore } from "../../../features/store";

export const googleLoginSetUp = async () => {
    signInWithPopup(auth, provider)
        .then((data) => {
            if (data != null) {
                const userDataFromArray = [ data.user.email, data.user.displayName ];

                if (userDataFromArray != null) {
                    useLocalStorage("userData").setItem(userDataFromArray);
                    userStore.getState().setUserData(userDataFromArray[0], userDataFromArray[1]);
                    dialogStore.getState().setIsOpen(false);
                    dialogStore.getState().setIsInfoOpen(true);
                }
            }
        })
}