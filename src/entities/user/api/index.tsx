import { GOOGLE_REDIRECT_URL } from "../../../constants/const/const";

export const googleLoginSetUp = (client_id: string, redirect_uri: string, scope: string) => {
    try {
        fetch(GOOGLE_REDIRECT_URL)
            .then(response => {
                console.log(response.body);
                window.location.href = GOOGLE_REDIRECT_URL;
            })

    } catch (err) {
        console.error(err);
    }
}